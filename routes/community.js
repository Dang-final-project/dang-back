const express = require("express");
const router = express.Router();
const { writeReport } = require("../controllers/community");

router.post("/report", writeReport);

module.exports = router;
