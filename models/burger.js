const { selectAll, insertOne, updateOne } = require('../config/orm.js');

let burgers = {
    all: (cb) => {
        selectAll('burgers', (res) => {
            cb(res);
        });

    },
    create: (burgerName, cb) => {
        insertOne('burgers', ["burger_name", "devoured"] ,[burgerName, false], (res) => {
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