import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserList from './UserList'

class UserPage extends Component {

    render() {
        return (
            <div>
                <div>
                    Hello from the UserPage.
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <UserList users={this.props.users} />
                </div>
            </div>
        )
    }
}

export default UserPage