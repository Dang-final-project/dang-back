const passport = require("passport");

module.exports = () => {

    // 전략 성공 시 호출
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
}