const connection = require('./connection.js');

let orm = {
    selectAll: (dbTable, cb) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, dbTable, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: (dbTable, columns, values, cb) => {
        let queryString = "INSERT INTO " + dbTable + "(??) VALUES (??);";
        console.log(queryString);
        connection.query(queryString, [columns, values] , (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: (dbTable, burgerName, isDevoured, cb) => {
        let queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [dbTable, isDevoured, burgerName], (err, res) => {
            console.log(queryString)
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;