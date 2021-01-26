const connection = require('./conncetion.js');

let orm = {
    selectAll: (database) => {
        connection.query("SELECT * FROM ? ;" , database);
    },

    insertOne: () => {

    },

    updateOne: () => {

    }
}

module.exports = orm;