import React, { Component } from 'react'

class EditUserForm extends Component {

    state = {
        updatedUser: {}
    }

    handleUpdateUserChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedUser = {...this.state.updatedUser}

        updatedUser[attributeName] = attributeValue

        this.setState({updatedUser})
    }

    editUser = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.updatedUser)
    }


    render() {
        return(
            <div>
                <form onSubmit={this.addNewUser} >
                    <div><input type="text" name="userName" placeholder="User Name" onChange={this.handleUpdateUserChange} value={this.props.user.userName} /></div>
                    <div><input type="text" name="firstName" placeholder="First Name" onChange={this.handleUpdateUserChange} value={this.props.user.firstName} /></div>
                    <div><input type="text" name="lastName" placeholder="Last Name" onChange={this.handleUpdateUserChange} value={this.props.user.lastName} /></div>
                    <div><input type="text" name="email" placeholder="Email" onChange={this.handleUpdateUserChange} value={this.props.user.email} /></div>
                    <div><input type="submit" value="Create New User" /></div>
                </form>
            </div>
        )
    }
}


export default EditUserForm