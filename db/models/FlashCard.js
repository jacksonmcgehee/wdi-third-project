const mongoose = require('mongoose')
const Schema = require('../schema.js')

const FlashCard = mongoose.model('FlashCard', Schema.FlashCardSchema)

module.exports = FlashCard