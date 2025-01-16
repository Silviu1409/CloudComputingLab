-- Create the users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    phone_number VARCHAR(20),
    role VARCHAR(50)
);

-- Insert sample users
INSERT INTO users (first_name, last_name, email, password_hash, phone_number, role)
VALUES
  ('John', 'Doe', 'john.doe@example.com', 'hashed_password_1', '123-456-7890', 'customer'),
  ('Jane', 'Smith', 'jane.smith@example.com', 'hashed_password_2', '987-654-3210', 'admin');