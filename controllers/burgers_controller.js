const express = require('express');
const {selectAll, insertOne, updateOne} = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {

});

router.post('/api/burgers', (req, res) => {

});

router.put('/api/burgers', (req, res) => {

});

module.exports = router;