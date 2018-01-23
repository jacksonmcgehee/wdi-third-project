import React from 'react'
import {Link} from 'react-router-dom'

const UserPreview = (props) => {
   
    return (
        <div>
            <Link to={`/users/${props.user._id}`} >{props.user.userName}</Link>
            
        </div>
    )
}

export default UserPreview