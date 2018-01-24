import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import UserList from './UserList'
import Modal from './TestModal'

class UserPage extends Component {

    state = {
        users: [],
        isOpen: false
      }

    toggleModal = () => {
        this.setState({
        isOpen: !this.state.isOpen
        })
    }
    
    async componentWillMount() {
        const response = await axios.get('/api/users')
        this.setState({users: response.data})
    }

    render() {
        return (
            <div>
                <div>
                    Hello from the UserPage.
                    <Link to='/'>Home</Link>
                </div>

                <div>
                    <button onClick={this.toggleModal}>
                        Add a New User
                    </button>

                    <Modal show={this.state.isOpen}
                        onClose={this.toggleModal} />
                </div>

                <div>
                    <UserList users={this.state.users} />
                </div>
            </div>
        )
    }
}

export default UserPage