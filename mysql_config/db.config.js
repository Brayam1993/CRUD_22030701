
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'contraseña',
    database : 'node_mysql_crud_users_db'        
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;
