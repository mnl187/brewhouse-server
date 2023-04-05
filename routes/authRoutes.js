const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    // kod rejestracji
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    // kod logowania
});

module.exports = router;