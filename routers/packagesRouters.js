//const Packages = require('../helpers/packagesHelpers')
const db = require('../data/dbConfig')

const router = require('express').Router()

/*=== READ ALL PACKAGES ===*/
router.get('/', async (req, res) => {
  try {
    /*=== unfinished, need to write joint query that gets suggestions too===*/
    const packages = await db('packages')
    res.status(200).json(packages)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

/*=== READ ALL PACKAGES BY PACKAGE_ID ===*/
router.get('/:package_id', async (req, res) => {
  const { package_id } = req.params

  try {
    /*=== unfinished, need to write joint query that gets suggestions too===*/
    const package = await db('packages')
      .where({ package_id })
      .first()
    res.status(200).json(package)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

/*=== CREATE PACKAGES ===*/
router.post('/', async (req, res) => {
  const { name, type, description, price, city_id, creator_id } = req.body

  try {
    const package = await db('packages').insert(req.body)
    res.status(201).json(package)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

/*=== UPDATE PACKAGES ===*/
router.put('/', async (req, res) => {
  // optional
})

/*=== DELETE PACKAGES ===*/
router.delete('/:package_id', async (req, res) => {
  const { package_id } = req.params

  try {
    const deleted = await db('packages')
      .where({ package_id })
      .del()
    res.status(204).json(deleted)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router
