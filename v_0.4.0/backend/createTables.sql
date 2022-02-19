create table ict4n.organization(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  regnumber VARCHAR(100),
  phone VARCHAR(100),
  address VARCHAR(100),
  bic VARCHAR(100),
  iban VARCHAR(100),
  PRIMARY KEY (id)
);
insert into ict4n.organization (name, email) values ('TL Timing Oy', 'testi@testi.fi');


create table ict4n.user(
  id INT NOT NULL AUTO_INCREMENT,
  login VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  organization_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (organization_id) REFERENCES ict4n.organization(id)
);
insert into ict4n.user (login, password, role, organization_id) values ('admin', '$2b$10$wswy7PnzOuOR9yJGCpyROOVAoWycs5YBqlcUy0Pj9MC9DyPxftqu2', 'ADMINISTRATOR', (select id from ict4n.organization order by id limit 1));


create table ict4n.event(
  id INT NOT NULL AUTO_INCREMENT,
  namefi VARCHAR(100) NOT NULL,
  nameen VARCHAR(100),
  city VARCHAR(100) NOT NULL,
  address VARCHAR(100),
  startdate DATE NOT NULL,
  enddate DATE,
  registrationduedate DATE NOT NULL,
  managedbyorganization BOOLEAN NOT NULL DEFAULT 0,
  infotext VARCHAR(2000),
  organization_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (organization_id) REFERENCES ict4n.organization(id)
);

create table ict4n.category(
  id INT NOT NULL AUTO_INCREMENT,
  namefi VARCHAR(100) NOT NULL,
  nameen VARCHAR(100),
  price1 DECIMAL(15,2),
  duedate1 DATE,
  price2 DECIMAL(15,2),
  duedate2 DATE,
  price3 DECIMAL(15,2),
  duedate3 DATE,
  price4 DECIMAL(15,2),
  duedate4 DATE,
  price5 DECIMAL(15,2),
  duedate5 DATE,
  agecategory BOOLEAN NOT NULL DEFAULT 0,
  event_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (event_id) REFERENCES ict4n.event(id)
);

create table ict4n.registration(
  id int NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  birthdate DATE,
  sportsclub VARCHAR(100),
  phonenumber VARCHAR(100),
  address VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  postalcode VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  price DECIMAL(15,2),
  paymentreceived BOOLEAN NOT NULL DEFAULT 0,
  participationconfirmed BOOLEAN NOT NULL DEFAULT 0,
  notvisibletopublic BOOLEAN NOT NULL DEFAULT 0,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES ict4n.category(id)
);
