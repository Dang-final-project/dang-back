const { Report } = require("../models");

exports.writeReport = async (req, res, next) => {
    try {
        const { carNum, station, content, UserId } = req.body;

        const newReport = await Report.create({
            carNum,
            station,
            content,
            UserId,
        });

        res.status(200).json({
            code: 200,
            payload: newReport,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};
