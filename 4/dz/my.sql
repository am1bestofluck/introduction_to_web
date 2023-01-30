
CREATE TABLE COLLEAGUES (
  pId INTEGER AUTO_INCREMENT PRIMARY KEY,  
  name TEXT,
  age INTEGER,
  address TEXT);

INSERT INTO COLLEAGUES(name, age, address) VALUES ("Louie Fox",22, "London, bd Mercy 1");
INSERT INTO COLLEAGUES (name, age, address) VALUES ('Philip King',50,'Moscow, bd Peace 3');
INSERT INTO COLLEAGUES (name, age, address) VALUES ('Ivan Hussain',24,'Moscow, bd Wheat 5');
INSERT INTO COLLEAGUES (name, age, address) VALUES ('Lochlan Woods',25,'Canberra, bd Song 7');
INSERT INTO COLLEAGUES (name, age, address) VALUES ('Reggie Barker',26,'Texas, bd Smile 9');
INSERT INTO COLLEAGUES (name, age, address)  VALUES ('Aaryan Smith',22,'Kiev, bd Garden 11');
INSERT INTO COLLEAGUES (name, age, address)VALUES  ('Callum Wright',27,'Chisinau, bd Bride 15');

SELECT name FROM COLLEAGUES WHERE address LIKE 'Moscow%' and age > 19 and age < 30

