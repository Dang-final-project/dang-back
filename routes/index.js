const express = require('express');
const router = express.Router();
const { join } = require('../controllers/auth');
const stationRouter = require('./station');

// POST/V1/auth/join

// v1/stations
router.use('/stations', stationRouter);

const authRouter = require('./auth');

router.use('/auth', authRouter);

module.exports = router; 