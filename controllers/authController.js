const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    const {username, password} = req.body;

    // Sprawdzenie czy użytkownik istnieje
    const existingUser = await User.findOne({username});
    if (existingUser) {
        return res.status(400).json({message: 'Nazwa użytkownika jest już zajęta'});
    }

    // Szyfrowanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Utworzenie nowego użytkownika
    const newUser = new User({username, password: hashedPassword});

    // obsługa metod http
    try {
        await newUser.save();
        res.status(201).json({message: 'Użytkownik zarejestrowany pomyślnie'});
    } catch (error) {
        res.status(500).json({message: 'Błąd podczas rejestracji użytkownika', error});
    }
};

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        res.status(200).json({
            message: 'Zalogowano pomyślnie',
            user: {
                id: user._id,
                username: user.username,
            },
        });
    })(req, res, next);
};

module.exports = {
    register,
    login
};