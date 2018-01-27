import React from 'react'
import UserPreview from './UserPreview'

import ListContainer from '../styledComponents/ListContainer'

const UserList = (props) => {

    return(
        <ListContainer>
        {
            props.users.map((user) => {
            return (
                <div key={user._id}>
                    <UserPreview 
                    user={user} 
                    key={user._id}
                    deleteUser={props.deleteUser}
                    toggleDeleteModal={props.toggleDeleteModal} />
                </div>
            )
            })
        }
        </ListContainer>
        )
    }

export default UserList




