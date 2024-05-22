const express = require("express");
const router = express.Router();
const { writeReport } = require("../controllers/community");
const reviewRouter = require('./review');

router.post("/report", writeReport);

router.use('/review', reviewRouter)

module.exports = router;
