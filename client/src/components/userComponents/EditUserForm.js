import React, {Component} from 'react'

import SubmitButton from '../styledComponents/SubmitButton'
import ModalForm from '../styledComponents/ModalForm'
import FormInput from '../styledComponents/FormInput'

class EditUserForm extends Component {

    state = {
        updatedUser: {}
    }

    componentWillMount() {
        const updatedUser = {
            ...this.state.updatedUser
        }

        updatedUser.userName = this.props.user.userName
        updatedUser.firstName = this.props.user.firstName
        updatedUser.lastName = this.props.user.lastName
        updatedUser.email = this.props.user.email

        this.setState({updatedUser})
    }

    handleUpdateUserChange = (event) => {

        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedUser = {
            ...this.state.updatedUser
        }

        updatedUser[attributeName] = attributeValue

        this.setState({updatedUser})
    }

    editUser = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.updatedUser)
    }

    render() {
        return (
            <div>
                <ModalForm onSubmit={this.editUser}>
                    <div><FormInput
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.userName}/></div>
                    <div><FormInput
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.firstName}/></div>
                    <div><FormInput
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.lastName}/></div>
                    <div><FormInput
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.email}/></div>
                    <div><SubmitButton type="submit" value="Update User"/></div>
                </ModalForm>
            </div>
        )
    }
}

export default EditUserForm