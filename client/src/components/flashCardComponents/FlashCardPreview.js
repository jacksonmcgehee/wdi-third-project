import React from 'react'
import {Link} from 'react-router-dom'

import FlashContainer from '../styledComponents/FlashContainer'
import FlashLink from '../styledComponents/FlashLink'

const FlashCardPreview = (props) => {
   
    return (
        <FlashContainer>
            <FlashLink>
                <Link 
                to={`/users/${props.params.userId}/subjects/${props.params.subjectId}/flashCards/${props.flashCard._id}`} 
                key={props.flashCard._id}
                className="flash-link">
                {props.flashCard.question}
                </Link>
            </FlashLink>
        </FlashContainer>
    )
}

export default FlashCardPreview


// {`/users/${props.userId}/subjects/${props.subject._id}`}