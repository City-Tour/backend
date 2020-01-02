const bcrypt = require('bcryptjs')

const router = require('express').Router()
const Users = require('../helpers/authHelpers')

router.post('/register', async (req, res) => {
  /*=== email, password, fname, lname ===*/
  let { email, password, first_name, last_name } = req.body

  try {
    const hash = bcrypt.hashSync(password, 12)
    password = hash
    const saved = await Users.add({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
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
      res.status(200).json({ message: `Welcome ${user.email}!` })
    } else {
      res.status(401).json({ message: 'Invalid Credentials' })
    }
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router
