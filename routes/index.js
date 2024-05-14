const express = require('express');
const router = express.Router();
const { join, createToken } = require('../controllers/auth');


// POST/V1/auth/join
router.post('/auth/join', join);
router.post('/auth/login', createToken);

module.exports = router;