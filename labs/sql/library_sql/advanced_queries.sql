-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
  SELECT * FROM authors
  JOIN books ON authors.id = books.author_id
  WHERE UPPER(authors.name) = UPPER('George R.R. Martin');
-- Find all fields (book and author related) for all books written by Milan Kundera.
  SELECT * FROM authors
  JOIN books ON authors.id = books.author_id
  WHERE authors.name = 'Milan Kundera';
-- Find all books written by an author from China or the UK.
  SELECT * FROM books
  JOIN authors ON  authors.id = books.author_id
  WHERE nationality = 'China'
   OR nationality = 'United Kingdom';
-- Find out how many books Albert Camus wrote.
  SELECT authors.name, COUNT(books.title)
  AS total FROM books
  JOIN authors
  ON  authors.id = books.author_id
  WHERE authors.name = 'Albert Camus'
  GROUP BY authors.name;
-- Find out how many books were written by US authors.
   SELECT authors.nationality, COUNT(books.title)
   AS total
   FROM books
   JOIN authors
   ON  authors.id = books.author_id
   WHERE authors.nationality = 'United States of America'
   GROUP BY authors.nationality;
-- Find all books written after 1930 by authors from Argentina.
   SELECT * FROM books
   JOIN authors
   ON authors.id = books.author_id
   WHERE nationality = 'Argentina'
   AND publication_date >= 1930;
-- Find all books written before 1980 by authors not from the US.
  SELECT * FROM books
  JOIN authors ON authors.id = books.author_id
  WHERE authors.nationality != 'United States of America'
  AND books.publication_date <= 1980;
-- Find all authors whose names start with 'J'.
  SELECT * FROM books
  JOIN authors ON authors.id = books.author_id
  WHERE authors.name LIKE 'J%';
-- Find all books whose titles contain 'the'.
  SELECT * FROM books
  JOIN authors ON authors.id = books.author_id
  WHERE books.title LIKE '%the %';
-- Find all authors who have written books with that start with the letter 'N'.
  SELECT * FROM books
  JOIN authors ON authors.id = books.author_id
  WHERE books.title LIKE 'N%';
