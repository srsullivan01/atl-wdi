-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
SELECT * FROM authors;
(works)

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;
(works)

<<<<<<< HEAD
-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= 1900;
(work)
-- Get all authors born in the USA
SELECT * FROM authors where nationality = 'United States of America';
(works)
-- Get all books published on 1985
SELECT * FROM books where publication_date = 1985;
(works)
=======
-- Get all authors born in the 20th century or later

-- Get all authors born in the USA

-- Get all books published in 1985
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all books published before 1989
SELECT * FROM books where publication_date < 1989;
(dont work)

-- Get just the title of all books.
SELECT title FROM books;
(works)

-- Get just the year that 'A Dance with Dragons' was published
<<<<<<< HEAD
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
(works)
  -- Cry when you realize how long it's been (read the dark tower, realize how blessed you are)
=======
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title ILIKE '%the %' OR title ILIKE '% the %' or title ILIKE '% the%';
(works)

-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('Rory Chambers', 'The United States', 1989);
(works)
-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books(title, publication_date, author_id) VALUES ('The Great American Novel', 2012, 19), ('The Even Better American Novel', 2014, 19);
(works)
-- Update one of your books to have a new title
UPDATE books SET title = 'This Might Actually Suck?' WHERE title = 'The Great American Novel';
(works)
-- Delete your books
DELETE FROM books WHERE author_id = 19;
(works)
-- Delete your author entry
DELETE FROM authors where name= 'Rory Chambers';
(works)
