-- You can use this with the example code in
-- fdw_config
create database "fdw_example";

\c fdw_example
create table if not exists chartevents (
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
);
\c covid