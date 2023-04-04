const express = require('express');
const router = express.Router();
const beerStyles = require('../data/beerStyles.json');

// Endpoint GET do pobierania wszystkich stylów piwa
router.get('/', (req, res) => {
    res.json(beerStyles);
});

// Endpoint GET do pobierania wszystkich 1 stylu piwa
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const beerStyle = beerStyles.find((style) => style.number === id);

    if (beerStyle) {
        res.json(beerStyle);
    } else {
        res.status(404).json({ message: "Beer style not found" });
    }
});

module.exports = router;