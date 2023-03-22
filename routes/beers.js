const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');

router.get('/', async (req, res) => {
    const beers = await Beer.find();
    res.json(beers);
});

router.post('/', async (req, res) => {
    const newBeer = new Beer(req.body);
    await newBeer.save();
    res.json(newBeer);
});

module.exports = router;