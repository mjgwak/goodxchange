DROP DATABASE IF EXISTS goodxchange;

CREATE DATABASE goodxchange;

USE goodxchange;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(150) NOT NULL,
  profPicURL VARCHAR(150),
  city VARCHAR(150) NOT NULL
);

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  itemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uploadDate DATE NOT NULL,
  itemPic VARCHAR(150),
  userId INT NOT NULL,
  category VARCHAR(150) NOT NULL,
  price INT NOT NULL,
  numLikes INT,
  numViews INT,
  numChats INT,
  title VARCHAR(150) NOT NULL,
  description VARCHAR(1000),
  priceNegotiable BOOLEAN NOT NULL,
  CONSTRAINT fk_users FOREIGN KEY (userId) REFERENCES users(userId)
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  reviewId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  itemId INT,
  rating INT NOT NULL,
  CONSTRAINT fk_item FOREIGN KEY (itemId) REFERENCES items(itemId)
);

/*LOAD DATA LOCAL INFILE '/Users/minjigwak/Goodxchange/database/users.csv' INTO TABLE users FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (userId, userName, profPicUrl, city);