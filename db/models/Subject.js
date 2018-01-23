const mongoose = require('mongoose')
const Schema = require('../schema.js')

const Subject = mongoose.model('Subject', Schema.SubjectSchema)

module.exports = Subject