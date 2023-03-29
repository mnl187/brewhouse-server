const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');

router.get('/', async (req, res) => {
    const beers = await Beer.find();
    res.json(beers);
});

router.get('/:id', async (req, res) => {
    try {
        const beer = await Beer.findById(req.params.id);
        if (beer) {
            res.json(beer);
        } else {
            res.status(404).json({ message: 'Beer not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('Received data:', req.body); // Dodaje logowanie otrzymanych danych

        const newBeer = new Beer(req.body);
        const savedBeer = await newBeer.save();

        console.log('Saved beer:', savedBeer); // Dodaje logowanie zapisanego piwa

        res.json(savedBeer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const updatedBeer = await Beer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBeer);
});

router.delete('/:id', async (req, res) => {
    await Beer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Beer deleted' });
});

module.exports = router;