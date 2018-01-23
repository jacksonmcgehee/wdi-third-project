import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                Hello from the HomePage.
                <Link to='/users'>See Users</Link>
            </div>
        )
    }
}

export default HomePage