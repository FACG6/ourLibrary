BEGIN;

DROP TABLE IF EXISTS users, books, user_books;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    url TEXT NOT NULL, 
    name VARCHAR(255) NOT NULL
);

CREATE TABLE user_books (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    book_id INTEGER REFERENCES books(book_id)
);

INSERT INTO books(url, name) VALUES
('https://images.gr-assets.com/books/1328834793l/2998152.jpg', 'JAVASCRIPT'),
('https://d2sofvawe08yqg.cloudfront.net/the-road-to-learn-react/hero?1549488773', 'The Road to Lean React');

COMMIT;