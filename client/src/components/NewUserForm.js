import React, { Component } from 'react'

class NewUserForm extends Component {

    state = {
        newUser: {}
    }

    handleNewUserChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newUser = {...this.state.newUser}

        newUser[attributeName] = attributeValue

        this.setState({newUser})
    }

    addNewUser = (event) => {
        event.preventDefault()
        this.props.addUser(this.state.newUser)
    }


    render() {
        return(
            <div>
                <form onSubmit={this.addNewUser} >
                    <div><input type="text" name="userName" placeholder="User Name" onChange={this.handleNewUserChange} /></div>
                    <div><input type="text" name="firstName" placeholder="First Name" onChange={this.handleNewUserChange} /></div>
                    <div><input type="text" name="lastName" placeholder="Last Name" onChange={this.handleNewUserChange} /></div>
                    <div><input type="text" name="email" placeholder="Email" onChange={this.handleNewUserChange} /></div>
                    <div><input type="submit" value="Create New User" /></div>
                </form>
            </div>
        )
    }
}


export default NewUserForm