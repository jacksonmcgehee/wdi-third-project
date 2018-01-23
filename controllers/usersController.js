const express = require('express')
const User = require('../db/models/User')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find({}) // Find all of the ideas from the database
    res.json(users) // send the ideas back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

module.exports = router