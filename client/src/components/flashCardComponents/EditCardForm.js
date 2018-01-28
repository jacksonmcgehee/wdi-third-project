import React, { Component } from 'react'

import SubmitButton from '../styledComponents/SubmitButton'
import ModalForm from '../styledComponents/ModalForm'
import FormTextArea from '../styledComponents/FormTextArea'

class EditCardForm extends Component {

    state = {
        updatedCard: {}
    }

    componentWillMount () {
        const updatedCard = {...this.state.updatedCard}

        updatedCard.question = this.props.flashCard.question
        updatedCard.answer = this.props.flashCard.answer

        this.setState({updatedCard})

    }

    handleEditCardChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedCard = {...this.state.updatedCard}

        updatedCard[attributeName] = attributeValue

        this.setState({updatedCard})
    }

    editCard = (event) => {
        event.preventDefault()
        this.props.updateFlashCard(this.state.updatedCard)
    }


    render() {
        return(
            <div>
                <ModalForm onSubmit={this.editCard} >
                    <div><FormTextArea 
                    type="text" 
                    name="question" 
                    placeholder="Question"
                    required 
                    onChange={this.handleEditCardChange}
                    value={this.state.updatedCard.question} /></div>
                    <div><FormTextArea 
                    type="text" 
                    name="answer" 
                    placeholder="Answer" 
                    required
                    onChange={this.handleEditCardChange}
                    value={this.state.updatedCard.answer} /></div>
                    <div><SubmitButton type="submit" value="Submit" /></div>
                </ModalForm>
            </div>
        )
    }
}


export default EditCardForm