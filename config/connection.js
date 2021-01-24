const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Now connected to mysql");
});

module.exports = connection;