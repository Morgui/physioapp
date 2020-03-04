
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'

import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import AppointmentForm from './components/pages/Appointments/AppointmentForm'
import AppointmentCreated from './components/pages/Appointments/AppointmentCreated';


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }

  render() {

    return (
      < div className="bg">
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/appointment" render={match => <AppointmentForm {...match} />} />
          <Route path="/appointment/created/:reference" render={match => <AppointmentCreated {...match} />} />
          <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
          <Route path="/login" render={match => <Login setTheUser={this.setTheUser} {...match} />} />
        </Switch>
      </div>
    )
  }
}

export default App