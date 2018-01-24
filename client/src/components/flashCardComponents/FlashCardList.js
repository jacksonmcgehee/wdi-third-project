import React from 'react'
import FlashCardPreview from './flashCardComponents/FlashCardPreview'

const FlashCardList = (props) => {


    return (
        <div>
            Hello from the flash card list.
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
        </div>
    )
}

export default FlashCardList