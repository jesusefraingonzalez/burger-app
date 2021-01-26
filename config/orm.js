const connection = require('./connection.js');

let orm = {
    selectAll: (dbTable) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, dbTable, (err, result) => {
            if(err) throw err;
            console.table(result);
            return result;
        });
    },

    insertOne: (dbTable, burgerName, isDevoured) => {
        let queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)';
        connection.query(queryString, [dbTable, burgerName , isDevoured] , (err, res) => {
            if(err) throw err;
            return res;
        });

    },

    updateOne: (dbTable, burgerName, isDevoured) => {
        let queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [dbTable, isDevoured, burgerName], (err, res) => {
            if(err) throw err;
            return res;
        })
    }
}

module.exports = orm;