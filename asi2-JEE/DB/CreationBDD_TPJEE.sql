DROP DATABASE IF EXISTS LocalDB;
CREATE DATABASE LocalDB;

USE LocalDB;
DROP TABLE IF EXISTS T_USERS;
CREATE TABLE T_USERS (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,login CHAR(25), password CHAR(25), lastname CHAR(25), firstname CHAR(25));
INSERT INTO T_USERS (login, password, lastname, firstname) VALUES ("Tintin", "Milou", "Prosper", "Hergé");
INSERT INTO T_USERS (login, password, lastname, firstname) VALUES ("Asterix", "Idefix", "René", "Goscini");
INSERT INTO T_USERS (login, password, lastname, firstname) VALUES ("Mickey", "Pluto", "Walt", "Disney");