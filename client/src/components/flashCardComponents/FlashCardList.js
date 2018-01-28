import React from 'react'
import FlashCardPreview from './FlashCardPreview'

import ListContainer from '../styledComponents/ListContainer'
import FlashBigContainer from '../styledComponents/FlashBigContainer'
import FlashButton from '../styledComponents/FlashButton'

const FlashCardList = (props) => {


    return (
        <ListContainer>
            <h3 className="modal-title-text">{props.subject.name}</h3>
            <h3 className="modal-title-text">Test on: {props.subject.testDate}</h3>
            <FlashButton>Review</FlashButton>
            <FlashBigContainer>
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
            </FlashBigContainer>
        </ListContainer>
    )
}

export default FlashCardList