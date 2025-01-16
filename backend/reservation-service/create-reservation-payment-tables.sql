-- Create the payment_details table first
CREATE TABLE payment_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
    payment_method ENUM('credit_card', 'paypal', 'bank_transfer') NOT NULL,
    paid_on DATETIME DEFAULT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

-- Create the reservations table
CREATE TABLE reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    payment_id INT NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    reserved_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    seats INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES payment_details(id) ON DELETE CASCADE
);

-- Insert into payment_details table first
INSERT INTO payment_details (payment_status, payment_method, paid_on, amount) VALUES 
('paid', 'credit_card', '2025-01-10 12:40:00', 1998),
('pending', 'paypal', NULL, 1200),
('failed', 'credit_card', NULL, 8000),
('paid', 'bank_transfer', '2025-01-13 15:15:00', 9000),
('paid', 'credit_card', '2025-01-14 09:10:00', 2995),
('pending', 'paypal', NULL, 2400),
('failed', 'credit_card', NULL, 3000),
('paid', 'bank_transfer', '2025-01-17 14:00:00', 7200),
('pending', 'credit_card', NULL, 5000),
('paid', 'paypal', '2025-01-19 11:45:00', 4400);

-- Insert into reservations table using the correct payment_id
INSERT INTO reservations (user_id, payment_id, status, reserved_on, total_price, seats) VALUES 
(1, 1, 'confirmed', '2025-01-10 12:34:56', 1998, 2),
(1, 3, 'pending', '2025-01-11 14:20:00', 1200, 1),
(2, 5, 'cancelled', '2025-01-12 09:45:30', 8000, 4),
(2, 7, 'confirmed', '2025-01-13 15:10:25', 9000, 3),
(1, 2, 'confirmed', '2025-01-14 08:50:00', 2995, 5),
(2, 4, 'pending', '2025-01-15 17:30:00', 2400, 3),
(1, 6, 'cancelled', '2025-01-16 10:15:45', 3000, 3),
(2, 8, 'confirmed', '2025-01-17 13:45:00', 7200, 4),
(1, 9, 'pending', '2025-01-18 18:20:30', 5000, 2),
(2, 10, 'confirmed', '2025-01-19 11:25:15', 4400, 2);
