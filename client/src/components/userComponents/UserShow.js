import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import axios from 'axios'
import SubjectList from '../subjectComponents/SubjectList'
import EditUserModal from './EditUserModal'

class UserShow extends Component {

    state = {
        user: {},
        subjects: [],
        isOpenEdit: false
    }

    toggleEditModal = () => {
        this.setState({
        isOpenEdit: !this.state.isOpenEdit
        })
    }

    toggleSubjectModal = () => {
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
        axios.patch(`/api/users/${userId}`, {
            user: updatedUser
        }).then((res) => {
            const resUser = res.data
            this.setState({user: resUser})
        }).then(() => {
            this.toggleEditModal()
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
                    <button onClick={this.toggleEditModal}>
                        Edit {this.state.user.userName}
                    </button>

                    <EditUserModal 
                        show={this.state.isOpenEdit}
                        user={this.state.user} 
                        updateUser={this.updateUser}
                        toggleEditModal={this.toggleEditModal}/>

                    {/* <AddSubjectModal /> */}

                </div>
                <SubjectList 
                subjects={this.state.subjects} 
                userId={this.state.user._id}/>
            </div>
        )
    }
}

export default UserShow