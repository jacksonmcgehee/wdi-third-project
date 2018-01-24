import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import axios from 'axios'
import SubjectList from './SubjectList'

class UserShow extends Component {

    state = {
        user: {},
        subjects: []
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          axios.get(`/api/users/${userId}`)
          .then(res => {
            this.setState({user: res.data, subjects: res.data.subjects})
          })
        }
      }

   

    render() {

        return (
            <div>
                <div>
                    {this.state.user.userName}
                </div>
                <div>
                    {this.state.user.email}
                </div>
                {/* <div>
                    <button onClick="">Delete</button>
                </div> */}
                <SubjectList 
                subjects={this.state.subjects} 
                userId={this.state.user._id}/>
            </div>
        )
    }
}

export default UserShow