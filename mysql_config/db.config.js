/* eslint-disable no-console */
const mysql = require('mysql');

// local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node_mysql_crud_users_db',
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log('MySql Database Connected!');
});

module.exports = dbConn;
