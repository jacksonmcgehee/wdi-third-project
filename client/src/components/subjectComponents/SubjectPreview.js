import React from 'react'
import {Link} from 'react-router-dom'

import ButtonDiv from '../styledComponents/ButtonDiv'
import PreviewContainer from '../styledComponents/PreviewContainer'
import DeleteButton from '../styledComponents/DeleteButton'

const SubjectPreview = (props) => {
   
    const handleClick = () => {
        if(window.confirm('Are you sure?')) {
            props.deleteSubject(props.subject)
        }
    }

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
            onClick={handleClick}>
            </DeleteButton>

        </PreviewContainer>
    )
}

export default SubjectPreview