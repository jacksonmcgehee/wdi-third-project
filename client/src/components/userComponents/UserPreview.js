import React from 'react'
import {Link} from 'react-router-dom'

import ButtonDiv from '../styledComponents/ButtonDiv'
import PreviewContainer from '../styledComponents/PreviewContainer'
import DeleteButton from '../styledComponents/DeleteButton'

const UserPreview = (props) => {
   
    return (
        <PreviewContainer>
            <Link 
            to={`/users/${props.user._id}`} 
            key={props.user._id} className="router-link" >
                <ButtonDiv>
                    {props.user.userName}
                </ButtonDiv>
            </Link>
            <DeleteButton 
            type="submit" 
            value="Delete" 
            onClick={() => {props.deleteUser(props.user)}}></DeleteButton>
            
        </PreviewContainer>
    )
}

export default UserPreview