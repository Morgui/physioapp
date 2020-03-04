import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AppointmenService from '../../../services/appointment.services'
import AppointmentCreated from './AppointmentCreated'

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

class AppointmentForm extends Component {

    constructor(props) {
        super(props)
        this.service = new AppointmenService()
        this.state = {
            appointment: {
                name: '',
                surname: '',
                email: '',
                date: '',
                motive: ''
            },
            showForm: false,
            createdAppointment: null,  // aqui se guarda la cita tal como la devuelve el servidor
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            appointment: { ...this.state.appointment, [name]: value }
        })
    }

    createAppointment = (data) => {
        console.log("DATA:", data)
        this.service.createAppointment(data)
            .then(result => {
                console.log(result)
                this.setState({ createdAppointment: result.data })
            })
        }
        
        handleSubmit = e => {
            e.preventDefault()
            this.createAppointment(this.state.appointment)
            this.props.history.push("/appointment/created")
    }

    handleClose = () => this.setState({ showForm: false })
    handleShow = () => this.setState({ showForm: true })

    render() {
        return (
            <Container className="auth-div">
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <Switch>
                            <Route exact path='/appointment'>
                                <Button variant="success" onClick={this.handleShow}>
                                    Pedir Cita
                                </Button>
                                <Modal show={this.state.showForm} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Solicitar Cita</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group>
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control type="text" name="name" value={this.state.appointment.name} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Apellidos</Form.Label>
                                                <Form.Control type="text" name="surname" value={this.state.appointment.surname} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" name="email" value={this.state.appointment.email} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Fecha</Form.Label>
                                                <Form.Control type="date" name="date" value={this.state.appointment.date} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Hora</Form.Label>
                                                <Form.Control type="time" name="time" value={this.state.appointment.time} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Motivo de la consulta</Form.Label>
                                                <Form.Control type="text" name="motive" value={this.state.appointment.motive} onChange={this.handleChange} />
                                            </Form.Group>
                                            <Button variant="info" type="submit">Solicitar cita</Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </Route>
                            <Route path='/appointment/created' >
                                <AppointmentCreated appointment={this.state.createdAppointment} />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AppointmentForm