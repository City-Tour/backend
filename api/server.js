const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/*=== import routers here ===*/

const authRouter = require('../routers/authRouter')
const stripeRouter = require("../routers/stripeRouter")

const server = express()

server.use(helmet(), express.json(), cors())

server.get('/', (req, res) => {
  res.send('😈')
})

/*=== routers implemented here ===*/

server.use('/', authRouter)
server.use('/', stripeRouter)




module.exports = server



