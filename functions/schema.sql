DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, CompanyName TEXT, ContactName TEXT);
INSERT INTO orders (id, CompanyName, ContactName) VALUES (1, 'Alfreds Futterkiste', 'Maria Anders'), (4, 'Around the Horn', 'Thomas Hardy'), (11, 'Bs Beverages', 'Victoria Ashworth'), (13, 'Bs Beverages', 'Random Name');
