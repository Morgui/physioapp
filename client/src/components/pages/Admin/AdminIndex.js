import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Admin.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


class AdminIndex extends Component {

    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-center margin">
                    <Col md={4}>
                        <Card className="card-admin">
                            <Card.Body>
                                <Card.Img variant="top" src="/images/appointments.png" alt="imagen citas" />
                                <hr></hr>
                                <Button variant="outline-info" size="sm">
                                    <Link to="/admin/appointments">Citas</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-admin">
                            <Card.Body>
                                <Card.Img variant="top" src="/images/patients2.jpeg" alt="listado pacientes" />
                                <hr></hr>
                                <Button variant="outline-info" size="sm">
                                    <Link to="/admin/patients">Pacientes</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AdminIndex