const { selectAll, insertOne, updateOne } = require('../config/orm.js');

let burgers = {
    all: (cb) => {
        selectAll('burgers', (res) => {
            cb(res);
        });

    },
    create: (burgerName, isDevoured, cb) => {
        insertOne('burgers', burgerName, isDevoured, (res) => {
            cb(res);
        });

    },
    update: (burgerName, isDevoured, cb) => {
        updateOne('burgers', burgerName, isDevoured, (res) => {
            cb(res);
        });
    }
}

module.exports = burgers;