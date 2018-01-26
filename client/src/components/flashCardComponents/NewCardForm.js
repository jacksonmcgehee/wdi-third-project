import React, { Component } from 'react'

import SubmitButton from '../styledComponents/SubmitButton'
import ModalForm from '../styledComponents/ModalForm'
import FormTextArea from '../styledComponents/FormTextArea'

class NewCardForm extends Component {

    state = {
        newCard: {}
    }

    handleNewCardChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newCard = {...this.state.newCard}

        newCard[attributeName] = attributeValue

        this.setState({newCard})
    }

    addNewCard = (event) => {
        event.preventDefault()
        this.props.addFlashCard(this.state.newCard)
    }


    render() {
        return(
            <div>
                <ModalForm onSubmit={this.addNewCard} >
                    <div><FormTextArea 
                    type="text" 
                    name="question" 
                    placeholder="Question"
                    required 
                    onChange={this.handleNewCardChange} /></div>
                    <div><FormTextArea 
                    type="text" 
                    name="answer" 
                    placeholder="Answer" 
                    required
                    onChange={this.handleNewCardChange} /></div>
                    <div><SubmitButton type="submit" value="Create" /></div>
                </ModalForm>
            </div>
        )
    }
}


export default NewCardForm