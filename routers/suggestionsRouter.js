const db = require('../data/dbConfig')

const router = require('express').Router()

/*=== READ ALL SUGGESTIONS ===*/
router.get('/', async (req, res) => {
  try {
    const suggestions = await 'suggestions'
    res.status(200).json(suggestions)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

/*=== READ ALL SUGGESTIONS FOR EACH PACKAGE ===*/
router.get('/:package_id', async (req, res) => {
  const { package_id } = req.params

  try {
    const package_sugs = await db('packages')
      .where({ id: package_id })
      .join('suggestions', 'packages.id', 'suggestions.package_id')
      .select('*')
      .where('suggestions.package_id', 'package_id')

      res.status(200).json(package_sugs)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

/*=== CREATE SUGGESTIONS FOR PACKAGE ===*/
router.post('/:package_id', async (req, res) => {
  const { package_id } = req.params
  const { name, type, description, addresss, website } = req.body

  try {
    const suggestion = await db('suggestions').insert({
      name,
      type,
      description, 
      address,
      package_id
    })

    res.status(201).json(suggestion)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

/*=== UPDATE SUGGESTION ===*/
router.put('/', async (req, res) => {
  // not doing this
})

/*=== DELETE SUGGESTION ===*/
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deleted = await db('suggestions')
      .where({ id })
      .del()
    res.status(204).json(deleted)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router
