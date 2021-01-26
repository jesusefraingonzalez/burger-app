const { selectAll, insertOne, updateOne } = require('../config/orm.js');

let burgers = {
    selectAll: (cb) => {
        selectAll('burgers', (res) => {
            cb(res);
        });

    },
    insertOne: (burgerName, isDevoured, cb) => {
        insertOne('burgers', burgerName, isDevoured, (res) => {
            cb(res);
        });

    },
    updateOne: (burgerName, isDevoured, cb) => {
        updateOne('burgers', burgerName, isDevoured, (res) => {
            cb(res);
        });
    }
}

module.exports = burgers;