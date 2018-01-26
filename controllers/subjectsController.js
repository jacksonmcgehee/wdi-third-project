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

router.post('/', (req, res) => {
    const userId = req.params.userId
    const newSubject = req.body.subject
    User.findById(userId)
        .then((user) => {
            user.subjects.push(newSubject)
            return user.save()
    }).then((user) => {
        res.json(user)
    }).catch(console.log)
  })


module.exports = router