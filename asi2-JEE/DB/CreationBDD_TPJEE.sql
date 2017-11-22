DROP DATABASE IF EXISTS LocalDB;
CREATE DATABASE LocalDB;

USE LocalDB;
DROP TABLE IF EXISTS T_USERS;
CREATE TABLE T_USERS (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,login varchar(25) NOT NULL, password varchar(25) NOT NULL, first_name varchar(25), last_name varchar(25),role varchar(25), birthdate DATE);
INSERT INTO T_USERS (login, password, first_name, last_name, role, birthdate) VALUES ("Tintin", "Milou", "Prosper", "Hergé", "ADMIN", '1914-12-25');
INSERT INTO T_USERS (login, password, first_name, last_name, role, birthdate) VALUES ("Asterix", "Idefix", "René", "Goscini", "USER", '1948-01-25');
INSERT INTO T_USERS (login, password, first_name, last_name, role, birthdate) VALUES ("Mickey", "Pluto", "Walt", "Disney", "ADMIN", '1992-10-14');