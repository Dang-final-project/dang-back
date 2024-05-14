const express = require('express');
const router = express.Router();
const { join, createToken } = require('../controllers/auth');


// POST/V1/auth/join
router.post('/auth/join', join);

// POST/V1/auth/login
router.post('/auth/login', createToken);


// if -> login need
// router.get('/products', verifyToken, getProduct);

module.exports = router;