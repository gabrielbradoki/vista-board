const router = require('express').Router()
const Card = require('../models/Card')

// API Routes

// Create
  router.post('/', async (req, res) => {
    //req.body
    const {flag, titulo, projeto, previsaoDeTermino, descricao, codigo, equipe} = req.body;

    const task = {
      flag,
      titulo,
      projeto,
      previsaoDeTermino,
      descricao,
      codigo,
      equipe
    }

    try {
      await Card.create(task)
      res.status(201).json({message: 'card criado com sucesso'})
    } catch (error) {
      res.status(500).json({ error: error})
    }
  })

  // Read and Read with ID
  router.get('/', async (req, res) => {
    //req.body
      try {
      const task = await Card.find()
        res.status(200).json(task)
      } catch (error) {
        res.status(500).json({ error: error})
      }
    })

    router.get('/:id', async (req, res) => {
    const id = req.params.id
    //req.body
      try {
      const task = await Card.findOne({_id: id})
      if(!task) {
        res.status(422).json({ message: 'Card não foi encontrado!'})
        return
      }
        res.status(200).json(task)
      } catch (error) {
        res.status(500).json({ error: error})
      }
    })

 // Update (PATCH)
  router.patch('/:id', async (req, res) => {

    const id = req.params.id
    //req.body
    const {flag, titulo, projeto, previsaoDeTermino, descricao, codigo, equipe} = req.body;

    const task = {
      flag,
      titulo,
      projeto,
      previsaoDeTermino,
      descricao,
      codigo,
      equipe
    }

    try {
      const updateCard = await Card.updateOne({_id: id}, task)

      if(updateCard.matchedCount === 0) {
        res.status(422).json({ message: 'Card não foi encontrado!'})
        return
      }

      res.status(200).json(task)
    } catch (error) {
      res.status(500).json({ error: error})
    }
  })

 // Delete
 router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const task = await Card.findOne({_id: id})
  if(!task) {
    res.status(422).json({ message: 'Card não foi encontrado!'})
    return
  }

  //req.body
    try {
      await Card.deleteOne({_id: id})
      res.status(200).json({ message: 'Card deletado com sucesso'})
    } catch (error) {
      res.status(500).json({ error: error})
    }
  })

 module.exports = router
