-- postgres terminal command for making a database
CREATE DATABASE bank_accounts;

-- postgres terminal command for making a table inside the database you have moved into
CREATE TABLE accounts(
    acount_id SERIAL PRIMARY KEY,
    account_number BIGSERIAL,
    account_type VARCHAR(10),
    account_holder VARCHAR(20),
    funds DECIMAL(2)
);

INSERT INTO accounts(account_number, account_type, account_holder, funds)VALUES(
    336107052022,
    'business',
    'cj cash and carry',
    458726.88  
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(20),
    password VARCHAR(20),
    secret_password VARCHAR(20) 
);