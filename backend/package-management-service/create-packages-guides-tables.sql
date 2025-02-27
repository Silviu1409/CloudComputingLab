-- packages table
CREATE TABLE packages (
  id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  name VARCHAR2(255) NOT NULL,
  description CLOB,
  price NUMBER NOT NULL,
  duration NUMBER NOT NULL
);

-- guides table
CREATE TABLE guides (
  id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  first_name VARCHAR2(255) NOT NULL,
  last_name VARCHAR2(255) NOT NULL,
  language VARCHAR2(255) NOT NULL
);

-- package_guides table (many-to-many relationship)
CREATE TABLE package_guides (
  package_id NUMBER,
  guide_id NUMBER,
  PRIMARY KEY (package_id, guide_id),
  FOREIGN KEY (package_id) REFERENCES packages(id),
  FOREIGN KEY (guide_id) REFERENCES guides(id)
);

INSERT INTO packages (name, description, price, duration, availableSeats, imgSrc) VALUES
('Circuit Paris', 'Explorează minunile Parisului cu pachetul nostru exclusiv.', 999, 5, 15, '/paris.png'),
('City Break Londra', 'Bucură-te de frumusețea Londrei cu reduceri speciale.', 599, 4, 10, '/londra.png'),
('Paradis de Plajă', 'O vacanță relaxantă la plajă cu cazare de lux.', 1200, 7, 20, '/paradis-de-plaja.png'),
('Aventură Montană', 'O excursie palpitantă de drumeții și camping la munte.', 800, 5, 15, '/aventura-montana.png'),
('Safari în Natură', 'Participă la un safari african și explorează fauna diversificată.', 2000, 8, 10, '/safari-in-natura.png'),
('Escapadă pe Insulă', 'Fugi pe o insulă tropicală pentru distracție la soare.', 1000, 6, 25, '/escapada-pe-insula.png'),
('Croazieră de Lux', 'O croazieră de lux de 10 zile pe Marea Mediterană.', 3000, 10, 50, '/croaziera-de-lux.png'),
('Tur European', 'Vizitează orașe faimoase din Europa, inclusiv Paris și Roma.', 1800, 12, 40, '/tur-european.png'),
('Expediție Arctică', 'Descoperă frumusețea arctică și fenomenul uimitor al aurorei boreale.', 2500, 9, 12, '/expeditie-arctica.png'),
('Excursie în Asia', 'O călătorie captivantă prin Thailanda, Japonia și China.', 2200, 14, 30, '/excursie-in-asia.png');


INSERT INTO guides (first_name, last_name, language) VALUES
('John', 'Doe', 'English'),
('Jane', 'Smith', 'Spanish'),
('Carlos', 'Mendez', 'Spanish'),
('Olivia', 'Johnson', 'English'),
('Emilia', 'Wong', 'Mandarin'),
('Liam', 'Nguyen', 'Vietnamese'),
('Sophia', 'Martinez', 'French'),
('Michael', 'Brown', 'English'),
('Lucas', 'Perez', 'Portuguese'),
('Ava', 'Chen', 'Mandarin');

INSERT INTO package_guides (package_id, guide_id) VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 3),
(3, 6),
(3, 7),
(4, 1),
(4, 8),
(5, 9),
(6, 5),
(6, 10),
(7, 2),
(7, 3),
(8, 6),
(9, 4),
(9, 7),
(10, 5),
(10, 10);