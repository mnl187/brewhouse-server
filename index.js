const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const beerRoutes = require('./routes/beers');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
    try {
        await connectDB();
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
})();

app.use('/beers', beerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


