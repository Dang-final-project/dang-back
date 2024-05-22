const { Review } = require("../models");

exports.writeReview = async (req, res, next) => {
    try {
        console.log(req.body);
        const { station, starScore, content, UserId } = req.body;
        const createdAt = new Date();

        const newReview = await Review.create({
            station,
            starscore: starScore,
            content,
            UserId,
            createdAt,
        });

        res.status(200).json({
            code: 200,
            payload: newReview,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};
