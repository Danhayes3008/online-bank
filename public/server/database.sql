-- postgres terminal command for making a database
CREATE DATABASE bank_accounts;

-- postgres terminal command for making a table inside the database you have moved into
CREATE TABLE accounts(
    user_id SERIAL,
    user_name TEXT NOT NULL,
    account_type VARCHAR(10),
    funds NUMERIC(15,2),
    PRIMARY KEY (user_id,user_name)
);

INSERT INTO accounts(account_number, account_type, account_holder, funds)VALUES(
    336107052022,
    'business',
    'cj cash and carry',
    458726.88  
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    account_type VARCHAR(20),
    account_number BIGSERIAL,
    sort_code NUMERIC
);

DROP TABLE users;

INSERT INTO users(user_name, email, password, account_type, account_number, sort_code)VALUES(
    'JamesBurrock',
    'JBurrock@gmail.com',
    crypt('J88d2cgf9', gen_salt('bf')),
    'personal',
    (SELECT MAX(account_number)+1 FROM users),
    770011
);
INSERT INTO accounts(user_name, account_type, funds)VALUES(
    'JamesBurrock',
    'standard',
    563.26 
);
INSERT INTO accounts(user_name, account_type, funds)VALUES(
    'JamesBurrock',
    'savings',
    73450.07 
);

INSERT INTO users(user_name, email, password, account_type, account_number, sort_code)VALUES(
    'MegaMart',
    'M.ceo@megamart.com',
    crypt('fdniol309', gen_salt('bf')),
    'business',
    (SELECT MAX(account_number)+1 FROM users),
    770011
);
INSERT INTO accounts(user_name, account_type, funds)VALUES(
    'MegaMart',
    'business',
    23489032.07 
);

INSERT INTO users(user_name, email, password, account_type, account_number, sort_code)VALUES(
    'LilliesCafe',
    'L.ceo@outlook.com',
    crypt('casd89vc', gen_salt('bf')),
    'business',
    (SELECT MAX(account_number)+1 FROM users),
    770011
);

INSERT INTO accounts(user_name, account_type, funds)VALUES(
    'LilliesCafe',
    'business',
    33657.07 
);

INSERT INTO users(user_name, email, password, account_type, account_number, sort_code)VALUES(
    'AmandaHolding',
    'AHolding@outlook.com',
    crypt('A445d6gf9', gen_salt('bf')),
    'personal',
    3081010001,
    770011
);

INSERT INTO accounts(user_name, account_type, funds)VALUES(
    'AmandaHolding',
    'savings',
    458726.88 
);
INSERT INTO accounts(user_name, account_type, funds)VALUES(
    'AmandaHolding',
    'standard',
    7391.92 
);

DECLARE @id INT
SET .id = 3081010000
GO

UPDATE users
SET id = id = account_number +1
GO