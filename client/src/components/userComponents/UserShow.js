import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import axios from 'axios'
import SubjectList from './subjectComponents/SubjectList'
import EditUserModal from './userComponents/EditUserModal'

class UserShow extends Component {

    state = {
        user: {},
        subjects: [],
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
        isOpen: !this.state.isOpen
        })
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          axios.get(`/api/users/${userId}`)
          .then(res => {
            this.setState({user: res.data, subjects: res.data.subjects})
          })
        }
      }

    updateUser = (updatedUser) => {
        const userId = this.state.user._id
        axios.patch(`/api/users/${userId}/edit`, {
            user: updatedUser
        }).then((res) => {
            const resUser = res.data
            this.setState({user: resUser})
        }).then(() => {
            this.toggleModal()
        })
    }

    

    render() {

        return (
            <div>
                <div>
                    {this.state.user.userName}
                </div>
                <div>
                    {this.state.user.email}
                </div>
                {/* <div>
                    <button onClick="">Delete</button>
                </div> */}
                <div>
                    <button onClick={this.toggleModal}>
                        Edit {this.state.user.userName}
                    </button>

                    <EditUserModal 
                        show={this.state.isOpen}
                        user={this.state.user} 
                        updateUser={this.up}/>
                </div>
                <SubjectList 
                subjects={this.state.subjects} 
                userId={this.state.user._id}/>
            </div>
        )
    }
}

export default UserShow