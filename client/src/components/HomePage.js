import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component {

    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <div>
                <div>
                    Hello from the HomePage.
                </div>
                <div>
                    <Link to='/users'>See Users</Link>
                </div>
            </div>
        )
    }
}

export default HomePage