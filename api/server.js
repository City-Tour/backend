const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authenticate = require('../middleware/authenticate')

/*=== import routers here ===*/
const authRouter = require('../routers/authRouter')
const citiesRouter = require('../routers/citiesRouter')

const server = express()

server.use(helmet(), express.json(), cors())

server.get('/', (req, res) => {
  res.send('😈')
})

/*=== routers implemented here ===*/
server.use('/', authRouter)
server.use('/cities', authenticate, citiesRouter)

module.exports = server
