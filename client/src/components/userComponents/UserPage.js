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

    addUser = (newUser) => {
        axios.post(`/api/users`, {
            user: newUser
        }).then((res) => {
            const users = [...this.state.users]
            users.unshift(res.data)
            this.setState({users: users})
        }).then(() => {
            this.toggleModal()
        })
      }

    deleteUser = (user) => {
        const userId = user._id
        axios.delete(`/api/users/${userId}`)
            .then(() => {
                this.componentWillMount()
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
                    <UserList 
                    users={this.state.users} 
                    deleteUser={this.deleteUser}/>
                </div>
            </div>
        )
    }
}

export default UserPage