const {selectAll , insertOne, updateOne} = require('../config/orm.js');

let burgers = {
   selectAll: () => {
       selectAll('burgers');
   },
   insertOne: (burgerName, isDevoured) => {
       insertOne('burgers' , burgerName, isDevoured);
   },
   updateOne: (burgerName, isDevoured) => {
       updateOne('burgers', burgerName, isDevoured);
   }
}

module.exports = burgers;