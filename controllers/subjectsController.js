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

router.delete('/:subjectId', (req, res) => {
    const userId = req.params.userId
    const subjectId = req.params.subjectId

    User.findById(userId)
    .then((user) => {
        const subject = user.subjects.id(subjectId).remove()
        return user.save()
    }).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log(error)
    })
})


router.patch('/:subjectId', (req, res) => {
    const subjectId = req.params.subjectId
    const userId = req.params.userId
    const updatedSubject = req.body.subject
    // console.log('The req.body is: ', req.body.subject)
    User.findByIdAndUpdate(userId)
    .then((user) => {
        const subjectToEdit = user.subjects.id(subjectId)

        subjectToEdit.name = updatedSubject.name
        subjectToEdit.testDate = updatedSubject.testDate
        return user.save()
    })
    .then((user) => {
        res.json(user.subjects.id(subjectId))
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router