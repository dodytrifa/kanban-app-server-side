const { Task } = require('../models/')

const authorize = function (req, res, next) {
  Task.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(user => {
      if (req.decoded.id === user.userId) {
        next()
      } else {
        res.status(401).json({ message: "You are not authorize" })
        // next()
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
      // next(err)
    })
}

module.exports = authorize