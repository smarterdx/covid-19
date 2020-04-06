\c postgres
drop database if exists covid;
create database covid;
\c covid

\ir fdw_config.sql
\ir index.sql