const express = require('express')
const User = require('../db/models/User')
const Subject = require('../db/models/Subject')
const FlashCards = require('../db/models/FlashCard')
const router = express.Router({ mergeParams: true })


router.post('/', (req, res) => {
    const userId = req.params.userId
    const subjectId = req.params.subjectId
    const newCard = req.body.flashCard
    console.log('This is the new card: ', newCard)

    User.findById(userId)
        .then((user) => {
            const subject = user.subjects.id(subjectId)
            subject.flashCards.push(newCard)
            return user.save()
        })
        .then((user) => {
            console.log('This is the res.data from the server: ', user.subjects.id(subjectId).flashCards)
            res.json(user.subjects.id(subjectId).flashCards)
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router