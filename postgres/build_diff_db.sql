-- create a separate db so I can do `migra` diffs :-)
\c postgres
drop database if exists covid_diff;
create database covid_diff;
\c covid_diff

\ir index.sql