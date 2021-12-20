create table ict4n.registration(
  id int NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  league VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

create table ict4n.league(
  id int NOT NULL AUTO_INCREMENT,
  leaguekey VARCHAR(100) NOT NULL,
  leaguename VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
insert into ict4n.league (leaguekey, leaguename) values ('MEN_10_KM', 'miehet 10 km');
insert into ict4n.league (leaguekey, leaguename) values ('MEN_5_KM', 'miehet 5 km');
insert into ict4n.league (leaguekey, leaguename) values ('WOMEN_10_KM', 'naiset 10 km');
insert into ict4n.league (leaguekey, leaguename) values ('WOMEN_5_KM', 'naiset 5 km');

create table ict4n.user(
  id int NOT NULL AUTO_INCREMENT,
  login VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
insert into ict4n.user (login, password) values ('admin', '$2b$10$wswy7PnzOuOR9yJGCpyROOVAoWycs5YBqlcUy0Pj9MC9DyPxftqu2');
