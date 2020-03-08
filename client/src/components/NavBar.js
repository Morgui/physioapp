import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthServices from '../services/auth.services'

import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.authServices = new AuthServices()
    }

    logout = () => {
        this.authServices.logout()
            .then(response => {
                this.setState({ username: '', password: '' })
                this.props.setTheUser(false)
            })
            .catch(err => console.log(err))
    }

    render() {

        const greeting = this.props.loggedInUser ? <>Hi, {this.props.loggedInUser.username}!</> : <> </>

        return (

            <Navbar className="navbar" expand="lg" bg="light">
                <Navbar.Brand href="/">PhysioApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="div"> <Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link as="div"> <Link to="/appointment">Cita Online</Link></Nav.Link>
                        {this.props.loggedInUser ?
                            <>
                                <Nav.Link onClick={this.logout}>LogOut</Nav.Link>
                                <Nav.Link as="div"><Link to="/admin">{greeting}</Link></Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as="div"> <Link to="/signup">SignUp</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/login">LogIn</Link></Nav.Link>
                            </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Navigation