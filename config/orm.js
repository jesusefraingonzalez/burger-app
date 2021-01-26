const connection = require('./conncetion.js');

let orm = {
    selectAll: (database) => {
        connection.query("SELECT * FROM ? ;" , database, (err, result) => {
            if(err) throw err;
            console.log(result);
            return result;
        });
    },

    insertOne: () => {
    },

    updateOne: () => {

    }
}

module.exports = orm;