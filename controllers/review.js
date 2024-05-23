const { Review, User } = require("../models");

exports.writeReview = async (req, res, next) => {
    try {
        
        const { station, starScore, content, UserId } = req.body;

        const newReview = await Review.create({
            station,
            starscore: starScore,
            content,
            UserId,
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

exports.getReview = async (req, res, next) => {
    try {
        const reviews = await Review.findAll({
            where: { UserId: req.user.id},
            attributes: ['UserId', 'station', 'createdAt', 'starscore', 'content'],
            include: [
                {
                    model: User,
                    attributes: ['username'] // 필요한 사용자 속성을 포함합니다.
                }
            ]
        });
        res.json({
            code: 200,
            payload: reviews
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};
