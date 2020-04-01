create table patient_base (
  id serial primary key,
  first_name character varying(100) not null,
  last_name character varying(100) not null,
  mrn character varying(40) not null,
  hospital_id character varying(30) not null,
  dob timestamp with time zone,
  sex character varying(1) not null,
  created_at timestamp with time zone not null,
  updated_at timestamp with time zone not null
);

create table hospitalstay_base (
  id serial primary key,
  hospital_id character varying(30) not null,
  admission_date_time timestamp with time zone,
  discharge_date_time timestamp with time zone,
  account character varying(40) not null,
  age integer,
  current_location character varying(60) not null,
  current_service character varying(60) not null,
  patient_id integer,
  created_at timestamp with time zone not null,
  updated_at timestamp with time zone not null
);

create table observation_base (
  id serial primary key,
  name character varying(200) not null,
  date timestamp with time zone not null,
  value character varying(100) not null,
  numeric_value numeric(6,2),
  hospitalstay_id integer not null
);

create table physician_base (
  id serial primary key,
  first_name character varying(50) not null,
  last_name character varying(50) not null,
  email character varying(100) not null,
  phone character varying(20) not null,
  degree character varying(20),
  hospital_id character varying(30) not null,
  created_at timestamp with time zone not null,
  updated_at timestamp with time zone not null
);

create table public.covid_criteria (
  id serial primary key,
  observation_name character varying,
  score integer,
  threshold_low numeric,
  threshold_high numeric,
  observation_match character varying,
  constraint criteria_types_contstraint check (
    -- it's either a string match
    observation_match is not null and
    threshold_high is null and
    threshold_low is null
  or
    -- (x)or it's a numeric range
    observation_match is null and
    threshold_high is not null and
    threshold_low is not null
  )
);

create table observation_display_name (
  id serial primary key,
  key text,
  name text
);

create table observation_name_map (
  id serial primary key,
  your_name text,
  our_name text
);

-- create table suggestion (
--   id serial primary key,
--   diagnosis_identified_time timestamp with time zone not null,
--   patient_id integer not null,
--   hospital_id character varying(30) not null,
--   primary_diagnosis character varying(75) not null,
--   hospitalstay_id integer not null,
--   covid_star character varying(2) not null,
--   review_status character varying(40) not null,
--   created_at timestamp with time zone not null,
--   updated_at timestamp with time zone not null
-- );