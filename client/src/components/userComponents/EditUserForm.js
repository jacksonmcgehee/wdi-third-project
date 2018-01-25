import React, {Component} from 'react'

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
                <form onSubmit={this.editUser}>
                    <div><input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.userName}/></div>
                    <div><input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.firstName}/></div>
                    <div><input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.lastName}/></div>
                    <div><input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleUpdateUserChange}
                        value={this.state.updatedUser.email}/></div>
                    <div><input type="submit" value="Update User"/></div>
                </form>
            </div>
        )
    }
}

export default EditUserForm