const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
    } else {
        next();
    }
}

module.exports = withAuth;