import React from 'react'
import {Link} from 'react-router-dom'

const UserPreview = (props) => {
    const userId = '/users/' + props.user._id
    return (
        <div>
            <Link to={userId} >{props.user.userName}</Link>
            
        </div>
    )
}

export default UserPreview