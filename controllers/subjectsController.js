const express = require('express')
const User = require('../db/models/User')
const router = express.Router({ mergeParams: true })

router.get('/:subjectId', (req, res) => {
    const subjectId = req.params.subjectId
    const userId = req.params.userId
    User.findById(req.params.userId)
    .then((user) => {
        const subject = user.subjects.id(subjectId)
        res.json(subject)
    }).catch((error) => {
        console.log(error)
    })
})

module.exports = router