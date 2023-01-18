const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
});
// host : process.env.DB_HOST || 'localhost',
// user : process.env.DB_USER ||'root',
// password : process.env.DB_PASSWORD ||'hwhwhwlol',
// database : process.env.DB_NAME ||'crud'
pool.on('error', (err) => {
    console.log(err);
});

module.exports = pool;