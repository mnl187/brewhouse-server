const express = require('express');
const router = express.Router();
const beerStyles = require('../data/beerStyles.json');

// Endpoint GET do pobierania wszystkich stylów piwa
router.get('/', (req, res) => {
    res.json(beerStyles);
});

module.exports = router;