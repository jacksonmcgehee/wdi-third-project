import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserShow from './components/UserShow'
import SubjectShow from './components/SubjectShow'

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/users' component={UserPage}/>
          <Route exact path='/users/:userId' component={UserShow}/>
          <Route exact path='/users/:userId/subjects/:subjectId' component={SubjectShow} />
        </Switch>
      </Router>
    )
  }
}

export default App
