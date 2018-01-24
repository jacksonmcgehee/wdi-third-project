import React from 'react'
import {Link} from 'react-router-dom'

const FlashCardPreview = (props) => {
   
    return (
        <div>
            <Link 
            to={`/users/${props.params.userId}/subjects/${props.params.subjectId}/flashCards/${props.flashCard._id}`} 
            key={props.flashCard._id}>
            {props.flashCard.question}
            </Link>
        </div>
    )
}

export default FlashCardPreview


// {`/users/${props.userId}/subjects/${props.subject._id}`}