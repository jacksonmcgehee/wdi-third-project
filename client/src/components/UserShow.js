import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import axios from 'axios'
import SubjectList from './SubjectList'

class UserShow extends Component {

    state = {
        user: {}
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          axios.get(`/api/users/${userId}`)
          .then(res => {
            this.setState({user: res.data})
          })
        }
      }


    render() {
        return (
            <div>
                {this.state.user.userName}
                <SubjectList subjects={this.state.user.subjects} />
            </div>
        )
    }
}

export default UserShow