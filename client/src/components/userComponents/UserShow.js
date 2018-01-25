import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SubjectList from '../subjectComponents/SubjectList'
import EditUserModal from './EditUserModal'

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
                    userId={this.state.user._id}/>
                </CenterContainer>
                <div>
                    
                    <EditUserModal 
                        show={this.state.isOpenEdit}
                        user={this.state.user} 
                        updateUser={this.updateUser}
                        toggleEditModal={this.toggleEditModal}/>

                    {/* <AddSubjectModal /> */}

                </div>
                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <Link to='/users' className="fa fa-arrow-left fa-2x router-link" aria-hidden="true"></Link>
                    <i className="fa fa-pencil fa-2x" aria-hidden="true" onClick={this.toggleEditModal}></i>
                    <i className="fa fa-plus fa-2x" aria-hidden="true" ></i>
                </BasicFooter>
            </MainContainer>
        )
    }
}

export default UserShow