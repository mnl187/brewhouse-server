const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        console.log('MongoDB connected')
    } catch {

    }
}

module.exports = {
    connectDB,
}