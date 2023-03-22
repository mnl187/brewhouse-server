const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    name: String,
    style: String,
    ingredients: Array,
    instructions: String,
});

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;