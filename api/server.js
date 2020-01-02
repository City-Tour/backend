const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/*=== Stripe ===*/

const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY
const stripe = require('stripe')('sk_test_kha5ImDj5h2LzUgfR9Nit2Jx00pkmiYScQ')

/*=== import routers here ===*/

/*=== import routers here ===*/
const authRouter = require('../routers/authRouter')

const server = express()

server.use(require('body-parser').text(), helmet(), express.json(), cors())

server.get('/', (req, res) => {
  res.send('😈')
})

server.post('/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })

    res.json({ status })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

/*=== routers implemented here ===*/
server.use('/', authRouter)

module.exports = server
