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
    update: (obj, condition, cb) => {
        updateOne('burgers', obj, condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burgers;