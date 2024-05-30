-- Migration number: 0000 	 2023-11-30T14:31:16.121Z

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT
);

CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  userId TEXT,
  createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total REAL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT,
  price REAL
);

CREATE TABLE files (
  id TEXT PRIMARY KEY,
  type TEXT,
  createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data BLOB
);

CREATE TABLE orderProducts (
  id TEXT PRIMARY KEY,
  orderId TEXT,
  productId TEXT,
  imageId TEXT,
  price REAL,
  quantity INTEGER,
  FOREIGN KEY (orderId) REFERENCES orders(id),
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (imageId) REFERENCES files(id)
);
