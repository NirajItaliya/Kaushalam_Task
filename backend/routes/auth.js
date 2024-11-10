// routes/auth.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

// Register Route
router.post('/register', [
    body('username').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], register);

// Login Route
router.post('/login', [
    body('email').isEmail(),
    body('password').notEmpty()
], login);

module.exports = router;
