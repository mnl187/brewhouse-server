const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');

router.get('/', async (req, res) => {
    const beers = await Beer.find();
    res.json(beers);
});