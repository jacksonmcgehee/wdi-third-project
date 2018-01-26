import React, { Component } from 'react'

import SubmitButton from '../styledComponents/SubmitButton'
import ModalForm from '../styledComponents/ModalForm'
import FormInput from '../styledComponents/FormInput'

class EditSubjectForm extends Component {

    state = {
        updatedSubject: {}
    }

    componentWillMount() {
        const updatedSubject = {...this.state.updatedSubject}

        updatedSubject.name = this.props.subject.name
        updatedSubject.testDate = this.props.subject.testDate

        this.setState({updatedSubject})
    }

    handleEditSubjectChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedSubject = {...this.state.updatedSubject}

        updatedSubject[attributeName] = attributeValue

        this.setState({updatedSubject})
    }

    editSubject = (event) => {
        event.preventDefault()
        this.props.updateSubject(this.state.updatedSubject)
    }


    render() {
        return(
            <div>
                <ModalForm onSubmit={this.editSubject} >
                    <div><FormInput 
                    type="text" 
                    name="name" 
                    placeholder="Subject Name" 
                    onChange={this.handleEditSubjectChange}
                    value={this.state.updatedSubject.name} /></div>
                    <div><FormInput 
                    type="date" 
                    name="testDate" 
                    placeholder="Test Date" 
                    onChange={this.handleEditSubjectChange} 
                    value={this.state.updatedSubject.testDate} /></div>
                    <div><SubmitButton type="submit" value="Submit" /></div>
                </ModalForm>
            </div>
        )
    }
}


export default EditSubjectForm