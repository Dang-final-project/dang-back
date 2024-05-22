const express = require("express");
const router = express.Router();
const { writeReview } = require("../controllers/review");

router.post("/", writeReview);

module.exports = router;
