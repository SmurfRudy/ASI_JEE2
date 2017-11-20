DROP DATABASE IF EXISTS LocalDB;
CREATE DATABASE LocalDB;

USE LocalDB;
DROP TABLE IF EXISTS T_USERS;
CREATE TABLE T_USERS (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,login CHAR(25) NOT NULL, password CHAR(25) NOT NULL, first_name CHAR(25), last_name CHAR(25), birthdate DATE);
INSERT INTO T_USERS (login, password, first_name, last_name, birthdate) VALUES ("Tintin", "Milou", "Prosper", "Hergé", '1914-12-25');
INSERT INTO T_USERS (login, password, first_name, last_name, birthdate) VALUES ("Asterix", "Idefix", "René", "Goscini", '1948-01-25');
INSERT INTO T_USERS (login, password, first_name, last_name, birthdate) VALUES ("Mickey", "Pluto", "Walt", "Disney", '1992-10-14');