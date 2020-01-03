const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('../helpers/authHelpers')
const secrets = require('../config/secrets')

const router = require('express').Router()

router.post('/register', async (req, res) => {
  /*=== email, password, fname, lname ===*/
  let { email, password, first_name, last_name } = req.body

  try {
    const hash = bcrypt.hashSync(password, 12)
    password = hash
    const saved = await Users.add({
      first_name,
      last_name,
      email,
      password
    })
    res.status(201).json(saved)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  console.log('email: ', email)
  console.log('password: ', password)

  try {
    const user = await Users.findBy({ email })
    console.log('user: ', user)

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user)
      res.status(200).json({ message: `Welcome ${user.email}!`, token })
    } else {
      res.status(401).json({ message: 'Invalid Credentials' })
    }
  } catch (err) {
    res.status(500).json(err.message)
  }
})

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username
    // ...otherData
  }

  const options = {
    expiresIn: '1d' // show other available options in the library's documentation
  }

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, secrets.jwtSecret, options) // this method is synchronous
}

module.exports = router
