import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FlashCardList from '../flashCardComponents/FlashCardList'
import EditSubjectModal from './EditSubjectModal'
import NewCardModal from '../flashCardComponents/NewCardModal'

import MainContainer from '../styledComponents/MainContainer'
import BasicFooter from '../styledComponents/BasicFooter'

class SubjectShow extends Component {
    state = {
        subject: {},
        flashCards: [],
        isOpenEditSubject: false,
        isOpenAddSubject: false,
        isOpenAddCard: false
    }

    toggleEditSubjectModal = () => {
        this.setState({
        isOpenEditSubject: !this.state.isOpenEditSubject
        })
    }

    toggleAddCardModal = () => {
        this.setState({
        isOpenAddCard: !this.state.isOpenAddCard
        })
    }

    toggleEditCardModal = () => {
        this.setState({
            isOpenEditCard: !this.state.isOpenEditCard
        })
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          const { subjectId } = this.props.match.params
          axios.get(`/api/users/${userId}/subjects/${subjectId}`)
          .then(res => {
            this.setState({subject: res.data, flashCards: res.data.flashCards})
          })
        }
      }
    
    updateSubject = (updatedSubject) => {
        const userId = this.props.match.params.userId
        const subjectId = this.state.subject._id
        
        axios.patch(`/api/users/${userId}/subjects/${subjectId}`, {
            subject: updatedSubject
        }).then((res) => {
            this.setState({subject: res.data, 
                isOpenEditSubject: !this.state.isOpenEditSubject})
        })
    }

    addFlashCard = (newCard) => {
        const userId = this.props.match.params.userId
        const subjectId = this.state.subject._id

        axios.post(`/api/users/${userId}/subjects/${subjectId}/flashcard`, {
            flashCard: newCard
        }).then((res) => {
            this.setState({flashCards: res.data, 
            isOpenAddCard: !this.state.isOpenAddCard})
        })
    }

    deleteFlashCard = (flashcard) => {
        const userId = this.props.match.params.userId
        const subjectId = this.state.subject._id
        const flashcardId = flashcard._id
        axios.delete(`/api/users/${userId}/subjects/${subjectId}/flashcard/${flashcardId}`)
            .then((res) => {
                this.setState({flashCards: res.data})
            })
    }

    render() {
        const params = this.props.match.params
        // const subjectId = this.props.match.params
        return (
            <MainContainer>
                <div className="basic-header" >
                    <h2 className="header-text" >Due Point</h2>
                </div>
                <FlashCardList 
                flashCards={this.state.flashCards}
                subject={this.state.subject}
                deleteFlashCard={this.deleteFlashCard}
                toggleEditCardModal={this.toggleEditCardModal} 
                params={params}/>

                <EditSubjectModal
                show={this.state.isOpenEditSubject}
                subject={this.state.subject}
                updateSubject={this.updateSubject} 
                toggleEditSubjectModal={this.toggleEditSubjectModal}/>

                <NewCardModal
                show={this.state.isOpenAddCard}
                addFlashCard={this.addFlashCard}
                toggleAddCardModal={this.toggleAddCardModal} />

                <BasicFooter>
                    <Link to='/' className="fa fa-home fa-2x router-link" aria-hidden="true" ></Link>
                    <Link to={`/users/${params.userId}`} className="fa fa-arrow-left fa-2x router-link" aria-hidden="true"></Link>
                    <i className="fa fa-pencil fa-2x" aria-hidden="true" onClick={this.toggleEditSubjectModal} ></i>
                    <i className="fa fa-plus fa-2x" aria-hidden="true" onClick={this.toggleAddCardModal}></i>
                </BasicFooter>
            </MainContainer>
        )
    }
}

export default SubjectShow