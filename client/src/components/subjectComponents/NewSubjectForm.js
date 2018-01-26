import React, { Component } from 'react'

import SubmitButton from '../styledComponents/SubmitButton'
import ModalForm from '../styledComponents/ModalForm'
import FormInput from '../styledComponents/FormInput'

class NewSubjectForm extends Component {

    state = {
        newSubject: {}
    }

    handleNewSubjectChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newSubject = {...this.state.newSubject}

        newSubject[attributeName] = attributeValue

        this.setState({newSubject})
    }

    addNewSubject = (event) => {
        event.preventDefault()
        this.props.addSubject(this.state.newSubject)
    }


    render() {
        return(
            <div>
                <ModalForm onSubmit={this.addNewSubject} >
                    <div><FormInput 
                    type="text" 
                    name="name" 
                    placeholder="Subject Name"
                    required 
                    onChange={this.handleNewSubjectChange} /></div>
                    <div><FormInput 
                    type="date" 
                    name="testDate" 
                    placeholder="Test Date" 
                    onChange={this.handleNewSubjectChange} /></div>
                    <div><SubmitButton type="submit" value="Create" /></div>
                </ModalForm>
            </div>
        )
    }
}


export default NewSubjectForm