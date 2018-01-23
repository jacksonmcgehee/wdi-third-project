import React, { Component } from 'react'
import axios from 'axios'

class SubjectShow extends Component {
    state = {
        subject: {},
        flashCards: []
    }

    componentWillMount () {
        if (this.props.match.params) {
          const { userId } = this.props.match.params
          const { subjectId } = this.props.match.params
          axios.get(`/api/users/${userId}/subjects/${subjectId}`)
          .then(res => {
            this.setState({subject: res.data, flashCards: res.data.flashCards})
          })
        }
      }


    render() {

        return (
            <div>
                Hello again.
                {this.state.subject.name}
            
            </div>
        )
    }
}

export default SubjectShow