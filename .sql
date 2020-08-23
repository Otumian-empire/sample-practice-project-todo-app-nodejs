-- create database
create database todo_db;

-- create table items
create table tasks(id serial, item varchar(200) not null);
