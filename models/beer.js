const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    style: { type: String, required: true },
    ingredients: String,
    instructions: String,
});

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;