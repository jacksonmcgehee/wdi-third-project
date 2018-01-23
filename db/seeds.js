require('dotenv').config()

const User = require('./models/User.js')
const Subject = require('./models/Subject.js')
const FlashCard = require('./models/FlashCard.js')

const mongoose = require('mongoose')

// Connect to my DB
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

User.remove({})
    .then(() => {
        const bigBrain = new User({
            userName: 'Big Brain Brad',
            firstName: 'Brad',
            lastName: 'Delp',
            email: 'morethanafeeling@boston.com' 
        })
        const geography = new Subject({
            name: 'Geography',
        })
        const card1 = new FlashCard({
            question: 'What is the greatest city in Massachusetts?',
            answer: 'Peabody'
        })
        const card2 = new FlashCard({
            question: 'Where and when was the best concert of 1979?',
            answer: "Giants Stadium, 06/17/79"
        })
        const card3 = new FlashCard({
            question: 'Where is the best place for a midnight swim?',
            answer: 'Charles River'
        })
        const musicHistory = new Subject({
            name: 'Music History'
        })
        const card4 = new FlashCard({
            question: 'What is the most scrumtrulescent instrument?',
            answer: 'The keytar'
        })
        const card5 = new FlashCard({
            question: "What is music in which some element of the composition is left to chance, and/or some primary element of a composed work's realization is left to the determination of its performer(s)?",
            answer: 'Aleatoric'
        })
        const card6 = new FlashCard({
            question: 'How many keys on a piano?',
            answer: '88'
        })
        geography.flashCards.push(card1, card2, card3)
        musicHistory.flashCards.push(card4, card5, card6)
        bigBrain.subjects.push(geography, musicHistory)

        return bigBrain.save()
    }).then(() => {
        const dexter = new User({
            userName: 'Dexter',
            firstName: 'Bryan',
            lastName: 'Holland',
            email: 'badhabit@offspring.com'
        })
        const biology = new Subject({
            name: 'Molecular Biology'
        })
        const card7 = new FlashCard({
            question: 'Ion and polar molecules are insoluble or soluble in water?',
            answer: 'soluble. (they are hydrophillic) and water is polar so remember, like dissolves like'
        })
        const card8 = new FlashCard({
            question: 'What are some inorganic ions?',
            answer: 'Na^+, K^+, Mg^+2, Ca^+2, HPO4^2-,Cl^-,HCO3^- (ions)'
        })
        const card9 = new FlashCard({
            question: 'Name two common polysaccharides that are composed entirely of glucose and molecules in alpha configuration',
            answer: 'glycogen=storage of glucose in animal cells; starch= storage in plant cells'
        })
        const viral = new Subject({
            name: 'Viral Oncology and Proteomics'
        })
        const card10 = new FlashCard({
            question: 'absolute neutrophil count',
            answer: 'Absolute Neutrophil count= total WBC x (Neutrophils + Bands)'
        })
        const card11 = new FlashCard({
            question: '2-D gel reproducibility hindered the expansion of the technique until the introduction of what?',
            answer: 'Immobilized pH gradients (IPGs) in 1982'
        })
        const card12 = new FlashCard({
            question: 'What ionization technique for peptides allows protein identification and characterization on a large scale?',
            answer: 'Mass spectometry'
        })
        biology.flashCards.push(card7, card8, card9)
        viral.flashCards.push(card10, card11, card12)
        dexter.subjects.push(biology, viral)

        return dexter.save()
    }).catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
      }).then(() => {
        mongoose.connection.close()
        console.log(`
            Finished seeding database...
            
            Disconnected from MongoDB
          `)
      })