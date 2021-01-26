const connection = require('./connection.js');

let orm = {
    selectAll: (dbTable) => {
        let queryString = "SELECT * FROM " + dbTable + ";";
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            console.table(result);
            return result;
        });
    },

    insertOne: (burgerName, isDevoured, dbTable) => {
        let queryString = "INSERT INTO " + dbTable + '(burger_name, devoured) VALUES ("' + burgerName + '", ' + isDevoured + ");";
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            return res;
        });

    },

    updateOne: () => {

    }
}

module.exports = orm;