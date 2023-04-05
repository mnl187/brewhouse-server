const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const passport = require('passport');
const connectDB = require('./config/db');
const beerRoutes = require('./routes/beers');
const beerStylesRoutes = require('./routes/beerStyles');
const authRoutes = require('./routes/authRoutes');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use('/auth', authRoutes);
app.use('/beers', beerRoutes);
app.use('/beer-styles', beerStylesRoutes);

passport.use(
    new LocalStrategy(
        {usernameField: 'username', passwordField: 'password'},
        async (username, password, done) => {
            try {
                const user = await User.findOne({username})
                if (!user) {
                    return done(null, false, {message: 'Niepoprawna nazwa użytkonika lub hasło'});
                }

                const isValidPassword = await bcrypt.compare(password, user.password)
                if (!isValidPassword) {
                    return done(null, false, {message: 'Niepoprawna nazwa użytkownika lub hasło'});
                }
                return done(null, user);
            } catch (error) {
                return done(error)
            }
        }
    )
);

(async () => {
    try {
        await connectDB();
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
})();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


