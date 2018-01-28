import React, { Component } from 'react'

import FlashCardAnswer from './FlashCardAnswer'

import ListContainer from '../styledComponents/ListContainer'
import FlashContainer from '../styledComponents/FlashContainer'
import FlashLink from '../styledComponents/FlashLink'

class FlashCardPreview extends Component {
   
    state = {
        isOpenAnswer: false
    }

    toggleAnswer = () => {
        this.setState({
            isOpenAnswer: !this.state.isOpenAnswer
        })
    }

    handleClick = () => {
        if(window.confirm('Are you sure?')) {
            this.props.deleteFlashCard(this.props.flashcard)
        }
    }

    render() {
    return (
        <ListContainer>
            <FlashContainer>
                <i className="fa fa-pencil fa-lg fc-icon" aria-hidden="true" onClick={this.props.toggleEditFlashModal} ></i>
                <FlashLink onClick={this.toggleAnswer}>
                    {this.props.flashcard.question}
                </FlashLink>   
                <i className="fa fa-trash fa-lg fc-icon" aria-hidden="true" onClick={this.handleClick} ></i>
            </FlashContainer>
            <FlashCardAnswer 
                    show={this.state.isOpenAnswer}
                    flashCard={this.props.flashcard} />
        </ListContainer>
    )
}
}

export default FlashCardPreview


// {`/users/${props.userId}/subjects/${props.subject._id}`}