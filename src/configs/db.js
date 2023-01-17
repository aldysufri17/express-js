const mysql = require('mysql');
const pool = mysql.createPool({
        host : 'localhost',
        user : 'root',
        password : 'hwhwhwlol',
        database : 'crud'
});

pool.on('error', (err) => {
    console.log(err);
});

module.exports = pool;