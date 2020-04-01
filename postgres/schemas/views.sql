create or replace view covid_observations as
select
  observation.id as observation_id,
  hospitalstay_id,
  score
from observation
inner join covid_criteria on
  covid_criteria.observation_name = observation.name or
  covid_criteria.observation_name in (
  	select our_name from observation_name_map where
  	your_name = observation.name
  )
where
  value like observation_match or
  (
    numeric_value >= threshold_low and
    numeric_value <= threshold_high
  );

create or replace view public.covid_score as
select
  covid_observations.hospitalstay_id,
  sum(covid_observations.score) as score
from covid_observations
group by covid_observations.hospitalstay_id;

create or replace view observation_aggregates as
select
  name,
  hospitalstay_id,
  max(numeric_value), min(numeric_value)
from observation
where
name in (
  --maxes
  'heart_rate', 'temperature', 'respiratory_rate', 'nasal_cannula_flow_rate',
  --mins
  'systolic_blood_pressure', 'diastolic_blood_pressure', 'mean_blood_pressure'
)
group by name, hospitalstay_id;

create or replace view suggestion as
select distinct on (hospitalstay.id, patient.id) row_number() over (order by hospitalstay.id desc) as id,
  patient.id as patient_id,
  hospitalstay.id as hospitalstay_id,
  hospitalstay.hospital_id,
  case
    when ((covid_score.score < 40) or (covid_score.score is null)) then 1
    when ((covid_score.score >= 40) and (covid_score.score <= 80)) then 2
    when (covid_score.score > 80) then 3
    else null::integer
  end as covid_stars,
  case
    when (observation.value is null) then '[unknown primary diagnosis]'::character varying
    else observation.value
  end as primary_diagnosis
  from (((hospitalstay
    left join patient on ((hospitalstay.patient_id = patient.id)))
    left join covid_score on ((hospitalstay.id = covid_score.hospitalstay_id)))
    left join ( select dx_observation.hospitalstay_id,
      dx_observation.value,
      row_number() over (partition by dx_observation.hospitalstay_id order by dx_observation.date) as rk
      from observation dx_observation
    where ((dx_observation.name)::text = 'primary_diagnosis'::text)) observation on (((observation.hospitalstay_id = hospitalstay.id) and (observation.rk = 1))));

create table public.treatment_team (
  id serial primary key,
  hospitalstay_id integer not null,
  physician_id integer not null,
  start_time timestamp with time zone,
  end_time timestamp with time zone
);

create view public.treatment_team_physicians as
select
  treatment_team.hospitalstay_id,
  physician.*
from public.physician
join treatment_team
  on physician.id = treatment_team.physician_id
where treatment_team.end_time is null
order by treatment_team.start_time desc;
