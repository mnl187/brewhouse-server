const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    const { username, password } = req.body;

    // Sprawdzenie czy użytkownik istnieje
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Nazwa użytkownika jest już zajęta' });
    }

    // Szyfrowanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Utworzenie nowego użytkownika
    const newUser = new User({ username, password: hashedPassword});

};

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // kod logowania
    })(req, res, next);
};

module.exports = {
    register,
    login
};