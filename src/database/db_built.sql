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
('https://d2sofvawe08yqg.cloudfront.net/the-road-to-learn-react/hero?1549488773', 'The Road to Lean React'),('http://4.bp.blogspot.com/-BQ37KPo8S8I/VDclFoK7L1I/AAAAAAAAAuw/jMpFrAvXn6k/s1600/The-Art-of-R-Programming-Matloff-Norman.jpg', 'The Art of Programming'),
('https://images-na.ssl-images-amazon.com/images/I/518zGJULBrL._SX319_BO1,204,203,200_.jpg', 'Structure and Intergretation of Computer Programs'),
('https://images-eu.ssl-images-amazon.com/images/I/41L18FvA5rL._SY346_.jpg', 'Up & down JS'),
('http://t1.gstatic.com/images?q=tbn:ANd9GcSSguIUMT8vk-MWO3-QWLWoAFlm6PJHEnFHx4_kxZ76AJ6YWqA6', 'Learning Python'),
('http://t0.gstatic.com/images?q=tbn:ANd9GcRD5-DiCuIjqT9nyTL7jC9LxveXFE4QCMtrRjKWLV9cs7KQok5D', 'Eloquent Javascript'),
('https://images-na.ssl-images-amazon.com/images/I/713elKMGFkL.jpg', 'Express.js Guide');
COMMIT;