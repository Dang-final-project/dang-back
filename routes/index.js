const express = require('express');
const router = express.Router();
const { join } = require('../controllers/auth');
const stationRouter = require('./station');

// POST/V1/auth/join
router.post('/auth/join', join);

// v1/stations
router.use('/stations', stationRouter);


module.exports = router;