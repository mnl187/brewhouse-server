const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    // kod rejestracji
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