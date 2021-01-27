const { selectAll, insertOne, updateOne } = require('../config/orm.js');

let burgers = {
    all: (cb) => {
        selectAll('burgers', (res) => {
            cb(res);
        });

    },
    create: (cols, vals, cb) => {
        insertOne('burgers', cols, vals, (res) => {
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