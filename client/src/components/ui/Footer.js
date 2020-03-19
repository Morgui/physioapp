import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from 'react-bootstrap/Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

    render() {

        return (
            <div className="fixed-bottom">
                <Navbar bg="light">
                    <Container>
                        <Row>
                            <Col>
                                <p style={{ color: "gray" }}>PhysioApp © 2020 Todos los derechos reservados</p>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <a target="_new" className="icon" style={{ color: "gray" }} href="https://www.linkedin.com/in/luz-divina-delgado-casta%C3%B1eda/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </Col>
                            <Col >
                                <a target="_new" className="icon" style={{ color: "gray" }} href="https://github.com/Morgui"><FontAwesomeIcon icon={faGithub} /></a>
                            </Col>
                            <a target="_new" style={{ color: "gray" }} href="https://github.com/Morgui"><p>SPA by Morgui</p></a>
                        </Row>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer