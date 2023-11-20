-- Create the users table
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT
);

-- Create the basket_items table
DROP TABLE IF EXISTS basket_items;
CREATE TABLE IF NOT EXISTS basket_items (
  id TEXT PRIMARY KEY,
  product_id INTEGER,
  image BLOB,
  quantity INTEGER,
  subtotal REAL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create the orders table
DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  basket_id TEXT,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (basket_id) REFERENCES basket_items(id)
);

-- Create the products table
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT,
  price REAL
);

-- Insert sample data into the users table
INSERT INTO users (id, name, email, phone, address) VALUES 
('1', 'John Doe', 'john@example.com', '1234567890', '123 Main St'),
('2', 'Jane Smith', 'jane@example.com', '9876543210', '456 Elm St');

-- Insert sample data into the products table
INSERT INTO products (id, name, price) VALUES 
('1', 'Product A', 10.99),
('2', 'Product B', 20.49);

-- Insert sample data into the basket_items table
INSERT INTO basket_items (id, product_id, image, quantity, subtotal) VALUES 
('1', 1, NULL, 2, 21.98),
('2', 2, NULL, 1, 20.49);

-- Insert sample data into the orders table
INSERT INTO orders (id, user_id, basket_id) VALUES 
('1', '1', '1'),
('2', '2', '2');
