const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const beerRoutes = require('./routes/beers');
const beerStylesRoutes = require('./routes/beerStyles');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

passport.use(
    new LocalStrategy(
        {usernameFiled: 'username', passwordField: 'password'},
        async (username, password) => {
            try {
                const user = await User.findOne(username)
                if (!user) {
                    return ({message: 'Niepoprawna nazwa użytkonika lub hasło'});
                }

                const isValidPassword = await bcrypt.compare(password, user.password)
                if (!isValidPassword) {
                    return ({message: 'Niepoprawna nazwa użytkownika lub hasło'});
                }
                return (user);
            } catch (error) {
                return (error)
            }
        }
    ))
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
app.use('/beer-styles', beerStylesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


