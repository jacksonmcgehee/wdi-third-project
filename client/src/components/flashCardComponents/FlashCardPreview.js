import React, { Component } from 'react'

import FlashCardAnswer from './FlashCardAnswer'

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

    render() {
    return (
        <div>
        <FlashContainer>
            <i className="fa fa-pencil fa-lg" aria-hidden="true" onClick={this.props.toggleEditFlashModal} ></i>
            <FlashLink onClick={this.toggleAnswer}>
                {this.props.flashCard.question}
            </FlashLink>   
            <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
        </FlashContainer>
        <FlashCardAnswer 
                show={this.state.isOpenAnswer}
                flashCard={this.props.flashCard} />
        </div>
    )
}
}

export default FlashCardPreview


// {`/users/${props.userId}/subjects/${props.subject._id}`}