const mysql = require('mysql');

const credentials = {
    host: '166.62.10.189',
    user: 'zolopro',
    password: 'Zolopro@123',
    database: 'zolopro'
}


const pool  = mysql.createPool({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database,
    connectionLimit: 10,
});
pool.getConnection(function (err, connection) {
    if (err) throw err;
});

pool.on('error', function (err) {
    console.log(err.code);
});



module.exports = pool

