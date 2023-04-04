const { 
    Pool
} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SHOP',
    password: 'postgres',
});

module.exports = pool;
