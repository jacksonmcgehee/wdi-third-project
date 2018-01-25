import React from 'react'
import {Link} from 'react-router-dom'

const UserPreview = (props) => {
   
    return (
        <div>
            <Link 
            to={`/users/${props.user._id}`} 
            key={props.user._id}>
            {props.user.userName}
            </Link>
            <input 
            type="submit" 
            value="Delete User" 
            onClick={this.submit}></input>
            
        </div>
    )
}

export default UserPreview