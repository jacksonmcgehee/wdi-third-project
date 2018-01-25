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

  router.patch('/:userId/', (req, res) => {
    console.log(req.params.userId)
    console.log(req.body)
    User.findByIdAndUpdate(req.params.userId, req.body.user, {new: true})
    .then((user) => {
        console.log(user)
        res.json(user)
    }).catch((error) => {
        console.log(error)
    })
})

// router.patch('/:userId/', async(req, res) => {
//     try {
//         console.log('The try is getting called')
//         console.log(req.body)
//         const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
//         console.log('after the promise')
//         res.json(updatedUser)
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

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



module.exports = router