const { User } = require('../models/')
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
// const { OAuth2Client } = require('google-auth-library')

class UserController {
  static register(req, res, next) {

    const { email, password } = req.body

    User.create({ email, password })
      .then(user => {
        res.status(201).json({
          msg: 'Register Success',
          id: user.id,
          email: user.email,
        })
      })
      .catch(err => {
        next(err)

        // res.status(500).json({ err })
      })
  }

  static login(req, res, next) {
    const { email, password } = req.body

    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) throw { msg: 'Invalid email or password' }
        const comparedPassword = compare(password, user.password)

        if (!comparedPassword)
          throw { msg: 'Invalid email or password' }

        const access_token = generateToken({
          id: user.id,
          email: user.email
        })
        res.status(200).json({ access_token })
      })
      .catch(err => {

        const error = err.msg || 'internal server error'
        // res.status(500).json({ error })
        next(err)
      })
  }

}

module.exports = UserController