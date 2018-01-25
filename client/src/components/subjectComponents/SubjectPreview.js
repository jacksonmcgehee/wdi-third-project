import React from 'react'
import {Link} from 'react-router-dom'

import ButtonDiv from '../styledComponents/ButtonDiv'
import PreviewContainer from '../styledComponents/PreviewContainer'
import DeleteButton from '../styledComponents/DeleteButton'

const SubjectPreview = (props) => {
   
    return (
        <PreviewContainer>
            <Link 
            to={`/users/${props.userId}/subjects/${props.subject._id}`} 
            key={props.subject._id}
            className="router-link">
                <ButtonDiv>
                    {props.subject.name}
                </ButtonDiv>
            </Link>
            <DeleteButton
            type="submit"
            value="Delete"
            // add onClick here
            ></DeleteButton>

        </PreviewContainer>
    )
}

export default SubjectPreview