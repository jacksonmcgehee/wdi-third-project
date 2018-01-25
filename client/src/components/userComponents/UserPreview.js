import React from 'react'
import {Link} from 'react-router-dom'

import ButtonDiv from '../styledComponents/ButtonDiv'
import PreviewContainer from '../styledComponents/PreviewContainer'

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
            <input 
            type="submit" 
            value="Delete User" 
            onClick={() => {props.deleteUser(props.user)}}></input>
            
        </PreviewContainer>
    )
}

export default UserPreview