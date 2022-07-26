module.exports = function (req, res, next) {
    // status code 401
    if(!req.user) return res.status(401).json('Unauthorized')
    next()
}