const router = require('express').Router()
const Cities = require('../helpers/citiesHelpers')

router.get('/', async (req, res) => {
  try {
    cities = await Cities.find()
    res.send(cities)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router
