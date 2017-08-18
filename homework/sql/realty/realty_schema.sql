DROP TABLE IF EXISTS apartment;
DROP TABLE IF EXISTS office;
DROP TABLE IF EXISTS storefront;

CREATE TABLE apartment (
 id SERIAL PRIMARY KEY,
 apartment_number INTEGER,
 bedrooms INTEGER,
 bathrooms INTEGER,
  address VARCHAR NOT NULL,
 tenant VARCHAR,
 occupied BOOLEAN,
 square_footage INTEGER,
 price INTEGER
);

CREATE TABLE office (
  id SERIAL PRIMARY KEY,
  office_number INTEGER,
  floors INTEGER,
  square_footage INTEGER,
  cubicles INTEGER,
  bathrooms INTEGER,
  address VARCHAR NOT NULL,
  company_name VARCHAR,
  occupied BOOLEAN,
  price INTEGER,
);

CREATE TABLE storefront (
  id SERIAL PRIMARY KEY,
  address VARCHAR NOT NULL,
  occupied BOOLEAN,
  price INTEGER,
  kitchen BOOLEAN,
  square_footage INTEGER,
  owner VARCHAR,
  outdoor_seating BOOLEAN SET FALSE,
);
