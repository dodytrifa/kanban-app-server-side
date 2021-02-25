const { User } = require('../models/')
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

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

  static googleLogin(req,res){
    // res.send('tes dulu')
    // console.log(req.body.googleToken);
    let email = ''
    let password = 'usergoogle'
    const client = new OAuth2Client(process.env.CLIENT_ID)
    client 
    .verifyIdToken({
      idToken: req.body.googleToken,
      audience:process.env.CLIENT_ID
    })
    .then((ticket)=>{
      const payload = ticket.getPayload()
      email = payload.email
      return User.findOne({where: {email}})
    })
    .then(response => {
      if(response){
        const access_token = generateToken({
          id: response.id,
          email: response.email
        })
        res.status(200).json({ access_token })
      }else {
        return User.create({email, password})
      }
    })
    .then(response => {
      const access_token = generateToken({
        id: response.id,
        email: response.email
      })
      res.status(201).json({ access_token })
    })
    .catch((err)=> {
      console.log(err);
    })
  }

}

module.exports = UserController