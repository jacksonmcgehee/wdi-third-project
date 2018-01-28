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
            res.json(user.subjects.id(subjectId).flashCards)
        })
        .catch((error) => {
            console.log(error)
        })
})

router.delete('/:flashcardId', (req, res) => {
    const userId = req.params.userId
    const subjectId = req.params.subjectId
    const flashcardId = req.params.flashcardId

    User.findById(userId)
        .then((user) => {
            const subject = user.subjects.id(subjectId)
            subject.flashCards.id(flashcardId).remove()
            return user.save()
        })
        .then((user) => {
            res.json(user.subjects.id(subjectId).flashCards)
        })
        .catch((error) => {
            console.log(error)
        })
})

router.patch('/:flashcardId', (req, res) => {
    const userId = req.params.userId
    const subjectId = req.params.subjectId
    const flashcardId = req.params.flashcardId
    const updatedCard = req.body.flashCard
    console.log('This is the req.body: ', req.body.flashCard)

    User.findByIdAndUpdate(userId)
    .then((user) => {
        const subject = user.subjects.id(subjectId)
        const cardToEdit = subject.flashCards.id(flashcardId)

        cardToEdit.question = updatedCard.question
        cardToEdit.answer = updatedCard.answer
        return user.save()
    })
    .then((user) => {
        const subject = user.subjects.id(subjectId)
        res.json(subject.flashCards.id(flashcardId))
    })

})

module.exports = router