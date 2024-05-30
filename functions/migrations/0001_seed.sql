-- Migration number: 0001 	 2023-11-30T14:31:16.121Z

INSERT INTO users (id, name, email, phone, address) VALUES 
('test_user_1', 'John Doe', 'john@example.com', '1234567890', '123 Main St'),
('test_user_2', 'Jane Smith', 'jane@example.com', '9876543210', '456 Elm St');

INSERT INTO products (id, name, price) VALUES 
('test_prod_1', 'Product A', 10.99),
('test_prod_2', 'Product B', 20.49);

INSERT INTO orders (id, userId, total) VALUES 
('test_order_1', 'test_user_1', 100),
('test_order_2', 'test_user_2', 200);

INSERT INTO orderProducts (id, orderId, productId, quantity, price) VALUES 
('test_item_1', 'test_order_1', 'test_prod_1', 2, 21.98),
('test_item_2', 'test_order_1', 'test_prod_2', 1, 20.49);
