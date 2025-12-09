CREATE DATABASE sentiment_db;
USE sentiment_db;

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE analyses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    input_text TEXT,
    polarity FLOAT,
    subjectivity FLOAT,
    sentiment VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO admins (email, password) VALUES ('admin@example.com', 'password123');
SELECT * FROM admins;

select * from analyses;
