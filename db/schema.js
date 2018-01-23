const { Schema } = require('mongoose')

const FlashCardSchema = new Schema(
    {
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        answeredCorrectly: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: {},
        usePushEach : true
    }
)

const SubjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        testDate: {
            type: Date,
            required: false
        },
        flashCards: [FlashCardSchema]
    },
    {
        timestamps: {},
        usePushEach : true
    }
)

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subjects: [SubjectSchema]
    },
    {
        timestamps: {},
        usePushEach : true
    }
)

module.exports = {
    UserSchema,
    SubjectSchema,
    FlashCardSchema
}