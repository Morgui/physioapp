import React, { Component } from 'react';

/* ---- STYLES ---- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* ---- RRD COMPONENTS ---- */
import { Switch, Route, Redirect } from 'react-router-dom'

/* ---- SERVICES ---- */
import AuthServices from './services/auth.services'

/* ---- UI COMPONENTS ---- */
import NavBar from './components/ui/NavBar'
import Login from './components/auth/Login'
// import Signup from './components/auth/Signup'
import Footer from './components/ui/Footer'

/* ---- PAGES COMPONENTS ---- */
import Home from './components/pages/Home'
import AppointmentForm from './components/pages/Appointments/AppointmentForm'
import AppointmentCreated from './components/pages/Appointments/AppointmentCreated'
import AdminIndex from './components/pages/Admin/AdminIndex'
import AppointmentList from './components/pages/Admin/AppointmentList/AppointmentList'
import PatientList from './components/pages/Admin/Patients/PatientList'
import PatientDetails from './components/pages/Admin/Patients/PatientDetails'
import PatientEdit from './components/pages/Admin/Patients/PatientEdit'
import DataChart from './components/pages/Admin/DataCharts/DataChart'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.authServices = new AuthServices()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.authServices.loggedin()
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
          {/* <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} /> */}
          <Route path="/login" render={match => <Login setTheUser={this.setTheUser} {...match} />} />
          {this.state.loggedInUser ? (
            <>
              <Route exact path="/admin" render={() => <AdminIndex loggedInUser={this.state.loggedInUser} />} />
              <Route path="/admin/datacharts" render={() => <DataChart />} />
              <Route path="/admin/appointments" render={() => <AppointmentList />} />
              <Route exact path="/admin/patients" render={() => <PatientList />} />
              <Route exact path="/admin/patients/:id/edit" render={match => <PatientEdit {...match} />} />
              <Route exact path="/admin/patients/:id" render={match => <PatientDetails {...match} />} />
            </>
          ) : (
              <Redirect to="/" />
            )}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App