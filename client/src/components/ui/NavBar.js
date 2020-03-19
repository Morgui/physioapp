import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import AuthServices from '../../services/auth.services'

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
                <Image src="/images/fisio4.png" alt="logo" width={45} height={30}/>
                <Navbar.Brand href="/">PhysioApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="div"> <Link style={{ color: "gray", textDecoration: 'none' }} to="/">Inicio</Link></Nav.Link>
                        <Nav.Link as="div"> <Link style={{ color: "gray", textDecoration: 'none'}} to="/appointment">Cita Online</Link></Nav.Link>
                        {this.props.loggedInUser ?
                            <>
                                <Nav.Link onClick={this.logout}>Cerrar Sesión</Nav.Link>
                                <Nav.Link as="div"><Link style={{ color: "gray", textDecoration: 'none' }} to="/admin">{greeting}</Link></Nav.Link>
                            </>
                            :
                            <>
                                {/* <Nav.Link as="div"> <Link to="/signup">SignUp</Link></Nav.Link> */}
                                <Nav.Link as="div"> <Link style={{ color: "gray", textDecoration: 'none' }} to="/login">Intranet</Link></Nav.Link>
                            </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Navigation