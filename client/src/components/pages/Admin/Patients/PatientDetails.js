import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PatientService from '../../../../services/patient.services'
import AppointmentService from '../../../../services/appointment.services'

import moment from 'moment'
import '../../../../moment.locale'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class PatientDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patientId: props.match.params.id,
            patient: {
                name: '',
                surname: '',
                email: '',
                age: '',
                genre: '',
                antecedents: ''
            },
            appoinments: [
            ]
        }
        this.patientService = new PatientService()
        this.appoinmentService = new AppointmentService()
    }

    componentDidMount = () => {
        this.getPatientDetail(this.state.patientId)
        this.getOlderAppointments(this.state.patientId)
    }

    getPatientDetail = (id) => {
        return this.patientService.getPatientDetails(id)
            .then(patient => {
                this.setState({ patient })
            })
            .catch(err => console.log(err))
    }

    getOlderAppointments = (id) => {
        return this.appoinmentService.getOlderAppointments(id)
            .then(appoinments => {
                this.setState({ appoinments })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row className="margin">
                    <Col>
                        <h1>Historial</h1>

                        <div>
                            <Link to={`/admin/patients/${this.state.patient._id}/edit`}>
                                <Button variant="info" size="sm">Editar Historial</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <ul>
                            <li>
                                <strong>Nombre Completo</strong>
                                <p>{this.state.patient.name} {this.state.patient.surname}</p>
                            </li>
                            <li>
                                <strong>Datos de Contacto</strong>
                                <p>{this.state.patient.email}</p>
                            </li>
                            <li>
                                <strong>Edad</strong>
                                <p>{this.state.patient.age}</p>
                            </li>
                            <li>
                                <strong>Sexo</strong>
                                <p>{this.state.patient.genre}</p>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <strong>Motivos de la consulta</strong>
                                <ul>
                                    {this.state.appoinments.map(appointment => <li>{appointment.motive} - {moment(appointment.date).format('l')}</li>)}
                                </ul>
                            </li>
                            <br />
                            <li>
                                <strong>Antecedentes</strong>
                                <p>{this.state.patient.antecedents}</p>
                            </li>
                        </ul>

                    </Col>
                </Row>
                <Row className="margin">
                    <Col>
                        <Link to='/admin/patients'>
                            <Button variant="outline-info" size="sm">Volver</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PatientDetails