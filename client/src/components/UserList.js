import React from 'react'
import UserPreview from './UserPreview'

const UserList = (props) => {
    return (
        <div>
            {
                props.users.map((user) => {
                return (
                    <UserPreview user={user} {...props} key={user._id}/>
                )
                })
            }
        </div>
    )
}

export default UserList