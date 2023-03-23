const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    selectedStyle: { type: String, required: true },
    name: { type: String, required: true },
    ingredients: String,
    instructions: String,
});

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;