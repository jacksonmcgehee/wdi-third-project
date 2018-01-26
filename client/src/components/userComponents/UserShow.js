import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SubjectList from '../subjectComponents/SubjectList'
import EditUserModal from './EditUserModal'
import NewSubjectModal from '../subjectComponents/NewSubjectModal'

import MainContainer from '../styledComponents/MainContainer'
import ImgContainer from '../styledComponents/ImgContainer'
import Img from '../styledComponents/Img'
import PageTitle from '../styledComponents/PageTitle'
import CenterContainer from '../styledComponents/CenterContainer'
import BasicFooter from '../styledComponents/BasicFooter'

class UserShow extends Component {

    state = {
        user: {},
        subjects: [],
        isOpenEdit: false,
        isOpenSubject: false,
    }

    toggleEditModal = () => {
        this.setState({
        isOpenEdit: !this.state.isOpenEdit
        })
    }

    toggleSubjectModal = () => {
        this.setState({
        isOpenSubject: !this.state.isOpenSubject
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

    addSubject = (newSubject) => {
        const userId = this.state.user._id
        axios.post(`/api/users/${userId}/subjects`, {
            subject: newSubject
        }).then((res) => {
            this.setState({subjects: res.data.subjects})
        }).then(() => {
            this.toggleSubjectModal()
        })
    }

    deleteSubject = (subject) => {
        const userId = this.state.user._id
        const subjectId = subject._id
        axios.delete(`/api/users/${userId}/subjects/${subjectId}`)
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
                    <Img src="/images/bw-stacks.jpg" />
                    <PageTitle>
                        <h2 className="page-title-text" >{this.state.user.userName}</h2>
                    </PageTitle>
                </ImgContainer>
                <CenterContainer>
                    <SubjectList 
                    subjects={this.state.subjects}
                    userName={this.state.user.userName} 
                    userId={this.state.user._id}
                    deleteSubject={this.deleteSubject}/>
                </CenterContainer>
                <div>
                    
                    <EditUserModal 
                        show={this.state.isOpenEdit}
                        user={this.state.user} 
                        updateUser={this.updateUser}
                        toggleEditModal={this.toggleEditModal}/>

                    <NewSubjectModal 
                        show={this.state.isOpenSubject}
                        user={this.state.user}
                        subjects={this.state.subjects}
                        addSubject={this.addSubject}
                        toggleSubjectModal={this.toggleSubjectModal}/>

                </div>
                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <Link to='/users' className="fa fa-arrow-left fa-2x router-link" aria-hidden="true"></Link>
                    <i className="fa fa-pencil fa-2x" aria-hidden="true" onClick={this.toggleEditModal}></i>
                    <i className="fa fa-plus fa-2x" aria-hidden="true" onClick={this.toggleSubjectModal}></i>
                </BasicFooter>
            </MainContainer>
        )
    }
}

export default UserShow