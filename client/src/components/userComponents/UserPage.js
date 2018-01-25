import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import UserList from './UserList'
import NewUserModal from './NewUserModal'

import MainContainer from '../styledComponents/MainContainer'
import ImgContainer from '../styledComponents/ImgContainer'
import Img from '../styledComponents/Img'
import PageTitle from '../styledComponents/PageTitle'
import CenterContainer from '../styledComponents/CenterContainer'
import BasicFooter from '../styledComponents/BasicFooter'



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

    toggleDeleteModal = () => {
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
            users.push(res.data)
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
            <MainContainer>
                <div className="basic-header" >
                    <h2 className="header-text" >Due Point</h2>
                </div>
                <ImgContainer>
                    <Img src="/images/bw-seats.jpg" />
                    <PageTitle>
                        <h2 className="page-title-text" >Users</h2>
                    </PageTitle>
                </ImgContainer>
                <CenterContainer>
                    <UserList 
                    users={this.state.users}
                    deleteUser={this.deleteUser}
                    toggleDeleteModal={this.toggleDeleteModal}/>
                </CenterContainer>
                <div>
                    

                    <NewUserModal 
                        show={this.state.isOpen}
                        addUser={this.addUser}
                        toggleModal={this.toggleModal}  />
                    
                </div>

                
                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <i className="fa fa-plus fa-2x" aria-hidden="true" onClick={this.toggleModal}></i>
                </BasicFooter>
            </MainContainer>
        )
    }
}

export default UserPage