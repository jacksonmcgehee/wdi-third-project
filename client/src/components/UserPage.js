import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import UserList from './UserList'
import NewUserModal from './NewUserModal'

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

    addUser = (event) => {
        event.preventDefault()
        const newUser = this.state.newUser
        axios.post(`/api/users`, {
            user: newUser
        }).then(() => {
            this.props.toggleModal()
        })
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

                    <NewUserModal 
                        show={this.state.isOpen}
                        addUser={this.addUser}
                        toggleModal={this.toggleModal} />
                </div>

                <div>
                    <UserList users={this.state.users} />
                </div>
            </div>
        )
    }
}

export default UserPage