-- 1) First we configure the connection to the external database
-- and name it foreign_server, in this example I'm connecting
-- to a different db on this database.

-- see https://wiki.postgresql.org/wiki/Foreign_data_wrappers
-- for datasources other than postgres.
create extension "postgres_fdw";

-- 2) connect to the server.
create server foreign_server
foreign data wrapper postgres_fdw
options (
  host 'localhost',
  port '5431',
  dbname 'fdw_example'
);

-- 3) We also have to create a user mapping, we'll map
-- our 'covid' user to fdw_user
create user mapping for covid
server foreign_server
options (
  user 'fdw_user',
  password 'covid' -- this is THEIR password
);

-- 4) Now we can create a table based on what's available on your database.
-- As an example we'll bring in the chart_events table (example schema via mimic III)
create foreign table chartevents (
  row_id int not null,
	subject_id int not null,
	hadm_id int,
	icustay_id int,
	itemid int,
	charttime timestamp(0),
	storetime timestamp(0),
	cgid int,
	value varchar(255),
	valuenum double precision,
	valueuom varchar(50),
	warning int,
	error int,
	resultstatus varchar(50),
	stopped varchar(50)
)
server foreign_server
options (
  schema_name 'public',
  table_name 'chart_events'
);

-- 5) write your view(s)
create view observation_fdw as
-- Replace this with your code!
select
  row_id as id,
  itemid as name,
  charttime as date,
  value as value,
  valuenum as value_numeric,
  hadm_id as hospitalstay_id
from chartevents;

-- 6) go back to index.sql and add your fdw view(s) to the union and rerun