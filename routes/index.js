const express = require('express');
const router = express.Router();
const { join } = require('../controllers/auth');

// POST/V1/auth/join
router.post('/auth/join', join);


module.exports = router;