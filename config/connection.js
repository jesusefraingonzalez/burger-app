const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	o4kfednej7qkiorx",
    password: "ux5p6g7ho971x5ob",
    database: "jj3jxa7i6t070btk"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Now connected to mysql");
});

module.exports = connection;