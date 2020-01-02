const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authenticate = require('../middleware/authenticate')

/*=== import routers here ===*/
const authRouter = require('../routers/authRouter')
const citiesRouter = require('../routers/citiesRouter')
const stripeRouter = require('../routers/stripeRouter')
const packagesRouter = require('../routers/packagesRouters')

const server = express()

server.use(helmet(), express.json(), cors())

server.get('/', (req, res) => {
  res.send('😈')
})

/*=== routers implemented here ===*/
server.use('/', authRouter)
server.use('/cities', citiesRouter)
server.use('/packages', packagesRouter)
server.use('/', stripeRouter)

module.exports = server
