import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



import AppointmenService from '../../../services/appointment.services'


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
            createdAppointment: null,
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
        return this.service.createAppointment(data)
            .then(result => {
                console.log(result)
                this.setState({ createdAppointment: result.data })
                return result
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.createAppointment(this.state.appointment).then(appointment => {
            this.props.history.push(`/appointment/created/${appointment.data.reference}`)
        }).catch(err => console.log(err))
    }

    handleClose = () => this.setState({ showForm: false })
    handleShow = () => this.setState({ showForm: true })

    render() {
        return (
            <div>
                <Button variant="success" onClick={this.handleShow}>Pedir Cita</Button>
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
            </div>
        )
    }
}

export default AppointmentForm