const connection = require('./connection.js');

let orm = {
    selectAll: (dbTable, cb) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, dbTable, (err, res) => {
            if (err) throw err;
            console.table(res);
            cb(res);
        });
    },

    insertOne: (dbTable, burgerName, isDevoured, cb) => {
        let queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)';
        connection.query(queryString, [dbTable, burgerName, isDevoured], (err, res) => {
            if (err) throw err;
            cb(res);
        });

    },

    updateOne: (dbTable, burgerName, isDevoured, cb) => {
        let queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [dbTable, isDevoured, burgerName], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;