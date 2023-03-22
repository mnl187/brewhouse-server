const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/brewhouse', {})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: {PORT}`)))
    .catch((error) => console.log(error.message))

