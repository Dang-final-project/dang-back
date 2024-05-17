const express = require("express");
const router = express.Router();
const { join } = require("../controllers/auth");
const stationRouter = require("./station");
const authRouter = require("./auth");
const communityRouter = require("./community");
const { verifyToken } = require("../middlewares");

// v1/stations
router.use("/stations", verifyToken, stationRouter);

router.use("/auth", authRouter);

router.use("/community", communityRouter);
module.exports = router;
