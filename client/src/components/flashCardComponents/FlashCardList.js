import React from 'react'
import FlashCardPreview from './FlashCardPreview'

import ListContainer from '../styledComponents/ListContainer'
import FlashButton from '../styledComponents/FlashButton'

const FlashCardList = (props) => {


    return (
        <ListContainer>
            <h3 className="modal-title-text">{props.subject.name}</h3>
            <h3 className="modal-title-text">Test on: {props.subject.testDate}</h3>
            <FlashButton>Review</FlashButton>
            {
                props.flashCards.map((flashCard) => {
                return (
                    <div key={flashCard._id}>
                        <FlashCardPreview 
                        flashcard={flashCard} 
                        {...props} 
                        toggleEditFlashModal={props.toggleEditFlashModal}
                        deleteFlashCard={props.deleteFlashCard}
                        params={props.params}/>
                    </div>
                )
                })
            }
        </ListContainer>
    )
}

export default FlashCardList