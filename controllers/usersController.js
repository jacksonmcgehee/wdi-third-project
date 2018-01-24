const express = require('express')
const User = require('../db/models/User')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find({}) 
    res.json(users)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.post('/', (req, res) => {
    const newUser = new User(req.body.user)
    newUser.save().then((user) => {
      res.json(user)
    }).catch(console.log)
  })

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.json(user)
    }).catch((error) => {
        console.log(error)
    })
})

router.delete('/:userId', (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log(error)
    })
})

router.patch('/:userId/edit', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body)
    .then((user) => {
        res.json(user)
    }).catch((error) => {
        console.log(error)
    })
})

module.exports = router