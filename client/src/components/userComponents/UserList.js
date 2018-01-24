import React, { Component } from 'react'
import UserPreview from './userComponents/UserPreview'

class UserList extends Component {

    render() {

        const userPreview = this.props.users.map((user) => {
            return (
                <UserPreview 
                user={user} 
                key={user._id}
                deleteUser={this.props.deleteUser}/>
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




