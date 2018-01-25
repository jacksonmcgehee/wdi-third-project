import React from 'react'
import FlashCardPreview from './FlashCardPreview'

import ListContainer from '../styledComponents/ListContainer'
import FlashButton from '../styledComponents/FlashButton'

const FlashCardList = (props) => {


    return (
        <ListContainer>
            <h3 className="modal-title-text">{props.subject.name}</h3>
            <FlashButton>Review</FlashButton>
            {
                props.flashCards.map((flashCard) => {
                return (
                    <div key={flashCard._id}>
                        <FlashCardPreview 
                        flashCard={flashCard} 
                        {...props} 
                         
                        params={props.params}/>
                    </div>
                )
                })
            }
        </ListContainer>
    )
}

export default FlashCardList