const { User } = require('../models');

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.body.id },
            attributes: ['email', 'username', 'password']
        });
        res.json({
            code: 200,
            payload: user || {}
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.modifyUser = async (req, res, next) => {
    try {
        await User.update(
            {
                password: req.body.password,
                username: req.body.username,
            },
            {
                where: { id: req.user.id },
            }
        );

        res.json({
            code: 200,
            message: "사용자 정보 수정 완료",
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        await User.destroy({
            where: { id: req.body.id }
        });

        res.json({
            code: 200,
            message: '사용자 정보 삭제 완료'
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}