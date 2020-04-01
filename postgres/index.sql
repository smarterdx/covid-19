-- see fdw_config.sql to configure fdws.
\ir ./schemas/tables.sql

create or replace view patient as
  select * from patient_base
  -- union all
  -- select * from your_patient_fdw;
;

create or replace view hospitalstay as
  select * from hospitalstay_base
  -- union all
  -- select * from your_hospitalstay_fdw
;

create or replace view observation as
  select * from observation_base
  -- union all
  -- select * from your_observation_fdw
;

create or replace view physician as
  select * from physician_base
  -- union all
  -- select * from your_physician_fdw
;

\ir ./schemas/views.sql