import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Appointment extends Component {

    constructor(props) {
        super(props)
        // this.services = new Appointment()
        this.state = {
            name: '',
            surname: '',
            email: '',
            date: '',
            motive: '',
            showForm: false

        }
    }

    finishAction = () => {
        this.props.closeModal()
        this.props.refreshList()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            appointment: { ...this.state.appointment, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postAppointment()
    }

    handleClose = () => this.setState({ showForm: false })
    handleShow = () => this.setState({ showForm: true })

    render() {

        return (

            <Container className="auth-div">
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <Button variant="primary" onClick={this.handleShow}>
                            Prueba Modal
                        </Button>
                        <Modal show={this.state.showForm} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" name="surname" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date" name="date" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Hora</Form.Label>
                                        <Form.Control type="time" name="time" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Motivo de la consulta</Form.Label>
                                        <Form.Control type="text" name="motive" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">Solicitar cita</Button>
                                </Form>
                            </Modal.Body>
                            {/* <Modal.Footer>
                            </Modal.Footer> */}
                        </Modal>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Appointment