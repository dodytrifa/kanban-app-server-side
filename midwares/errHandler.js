module.exports = (err, req, res, next) => {
    //log dulu
    // console.log(err.msg);

    if (err.name == "SequelizeValidationError") {
        const errors = err.errors.map(el => el.message)
        res.status(400).json({ errors })
    }
    if (err.name == "SequelizeUniqueConstraintError") {
        const errors = err.errors.map(el => el.message)
        res.status(400).json({ errors })
    }
    if (err.msg == "Invalid email or password") {
        res.status(400).json(err.msg)
    }
    if (err.name == "JsonWebTokenError") {
        res.status(401).json(err.message)
    }
    // else if (err.name == 'customError') {
    //     res.status(err.status).json({ message: err.msg })
    // }
}