import React, { Component } from 'react'
import UserPreview from './UserPreview'

import ListContainer from '../styledComponents/ListContainer'

class UserList extends Component {

    render() {

        const userPreview = this.props.users.map((user) => {
            return (
                <UserPreview 
                user={user} 
                key={user._id}
                deleteUser={this.props.deleteUser}
                toggleDeleteModal={this.props.toggleDeleteModal}
                 />
            )
            })

        return (
            <ListContainer>
                { userPreview }
            </ListContainer>
        )
    }
}

export default UserList




