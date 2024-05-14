const express = require('express');
const router = express.Router();
const { join, createToken } = require('../controllers/auth');
const passport = require('passport');


// POST/V1/auth/join
router.post('/join', join);

// POST/V1/auth/login
router.post('/login', createToken);

// GET/V1/auth/kakao
router.get('/kakao', passport.authenticate('kakao'))


// if -> login need
// router.get('/products', verifyToken, getProduct);

module.exports = router;