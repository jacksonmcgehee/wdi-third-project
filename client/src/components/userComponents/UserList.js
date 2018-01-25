import React, { Component } from 'react'
import UserPreview from './UserPreview'

class UserList extends Component {

    render() {

        const userPreview = this.props.users.map((user) => {
            return (
                <UserPreview 
                user={user} 
                key={user._id}
                deleteUser={this.props.deleteUser}
                toggleDeleteModal={this.props.toggleDeleteModal}/>
            )
            })

        return (
            <div>
                { userPreview }
            </div>
        )
    }
}

export default UserList




