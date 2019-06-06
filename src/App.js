import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllEmployees from './Pages/AllEmployees'
import Employee from './Pages/Employee'
import AddEmployee from './Pages/AddEmployee'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllEmployees} />
          {/* <Route exact path="/Employee" component={Employee} /> */}
          <Route exact path="/AddEmployee" component={AddEmployee} />
        </Switch>
      </Router>
    )
  }
}

export default App
