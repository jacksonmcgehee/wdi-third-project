import React from 'react'
import {Link} from 'react-router-dom'

import ButtonDiv from '../styledComponents/ButtonDiv'
import CenterContainer from '../styledComponents/CenterContainer'

const UserPreview = (props) => {
   
    return (
        <CenterContainer>
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
            
        </CenterContainer>
    )
}

export default UserPreview