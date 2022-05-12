// This file connects the database to the project

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    host: 5000,
    database: "bank_accounts"
});

module.exports = pool;

