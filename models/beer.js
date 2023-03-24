const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
    amount: Number,
});

const beerSchema = new mongoose.Schema({
    selectedStyle: { type: String, required: true },
    name: { type: String, required: true },
    malts: [ingredientSchema],
    hops: [ingredientSchema],
    yeast: [ingredientSchema],
    extras: [ingredientSchema],
    instructions: String,
});

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;