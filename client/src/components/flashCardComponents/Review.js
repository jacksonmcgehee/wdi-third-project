import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import CardFront from './CardFront'
import CardBack from './CardBack'

import MainContainer from '../styledComponents/MainContainer'
import CardContainer from '../styledComponents/CardContainer'
import BasicFooter from '../styledComponents/BasicFooter'
import FlipButton from '../styledComponents/FlipButton'
import ReviewComplete from './ReviewComplete'



class Review extends Component {
    constructor(){
        super()
        this.state = {
            subject: {},
            flashcards: [],
            currentCard: {},
            isOpen: true,
            isOpenCompleteModal: false
          }

        this.randomCard=this.randomCard.bind(this)
        this.rightCardRemove=this.rightCardRemove.bind(this)
    }

    

    toggleCard = () => {
        this.setState({
        isOpen: !this.state.isOpen
        })
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          const { subjectId } = this.props.match.params
          axios.get(`/api/users/${userId}/subjects/${subjectId}`)
          .then(res => {
            this.setState({subject: res.data, flashcards: res.data.flashCards})
          }).then(() => {
              this.randomCard()
          })
        }
      }

    randomCard () {
            const flashcards = [...this.state.flashcards] 
            const randomCard = flashcards[Math.floor(Math.random()*flashcards.length)]
            this.setState({currentCard: randomCard, isOpen: true})
    }

    async rightCardRemove () {
            const flashcards = [...this.state.flashcards]
            const currentCard = {...this.state.currentCard}
            const filteredCards = await flashcards.filter((flashcard) => {
                return flashcard._id !== currentCard._id
            })
            this.setState({flashcards: filteredCards})
            this.randomCard()
        }
    

    render() {
        const params = this.props.match.params
        return (
            <MainContainer>
                <div className="basic-header" >
                    <h2 className="header-text" >Due Point</h2>
                </div>
                {
                    this.state.flashcards < 1 ? <ReviewComplete params={params}/> : 
                    <CardContainer>
                        <CardFront show={this.state.isOpen} 
                        currentCard={this.state.currentCard} />
                        <CardBack show={this.state.isOpen}
                        rightCardRemove={this.rightCardRemove}
                        randomCard={this.randomCard} 
                        currentCard={this.state.currentCard}
                        toggleCard={this.toggleCard}/>
                        <FlipButton onClick={this.toggleCard} >Flip</FlipButton>
                    </CardContainer>
                }
                
                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <Link to={`/users/${params.userId}/subjects/${params.subjectId}`} className="fa fa-arrow-left fa-2x router-link" aria-hidden="true"></Link>
                    <i className="fa fa-refresh fa-2x" aria-hidden="true" ></i>
                </BasicFooter>

                
            </MainContainer>
        )
    
    }
}

export default Review