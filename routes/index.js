const express = require('express');
const router = express.Router();
const { join } = require('../controllers/auth');
const stationRouter = require('./station');
const authRouter = require('./auth');

// v1/stations
router.use('/stations', stationRouter);

router.use('/auth', authRouter);

module.exports = router; 