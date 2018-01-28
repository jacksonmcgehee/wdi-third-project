import React, { Component } from 'react'
import FlashCardPreview from './FlashCardPreview'


import ListContainer from '../styledComponents/ListContainer'
import FlashBigContainer from '../styledComponents/FlashBigContainer'
import FlashButton from '../styledComponents/FlashButton'

class FlashCardList extends Component {

    render() {
        return (
            <ListContainer>
                <h3 className="modal-title-text">{this.props.subject.name}</h3>
                <h3 className="modal-title-text">Test on: {this.props.subject.testDate}</h3>
                <FlashButton>Review</FlashButton>
                <FlashBigContainer>
                {
                    this.props.flashCards.map((flashCard) => {
                    return (
                        <div key={flashCard._id}>
                            <FlashCardPreview 
                            flashcard={flashCard} 
                            {...this.props} 
                            toggleEditCardModal={this.props.toggleEditCardModal}
                            deleteFlashCard={this.props.deleteFlashCard}
                            params={this.props.params}/>
                        </div>
                    )
                    })
                }
                </FlashBigContainer>

            </ListContainer>
        )
    }
}

export default FlashCardList