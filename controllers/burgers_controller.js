const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        let object = {
            burgers: data
        };
        res.render('index', object);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false] , (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let condition = `id = ${req.params.id}`;
    console.log(`condition: ${condition}`);

    burger.update({devoured: req.body.devoured}, condition, (result) => {
        if(result.changedRows == 0) return res.status(404).end();
        else return res.status(200).end();
    });
});

module.exports = router;