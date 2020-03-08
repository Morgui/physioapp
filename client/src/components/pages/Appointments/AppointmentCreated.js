import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment';
import '../../../moment.locale'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AppointmentService from '../../../services/appointment.services'


class AppointmentCreated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reference: props.match.params.reference,
            appointment: {}
        }
        this.appointmentService = new AppointmentService()
    }

    componentDidMount = () => this.getAppointmentByReference(this.state.reference)

    getAppointmentByReference = (reference) => {
        this.appointmentService.getAppointmentByReference(reference)
            .then(result => {
                console.log(result)
                result ? this.setState({ appointment: result }) : this.props.history.push("/appointment")

            }).catch(err => console.log(err))
    }

    dateParse = (date, format) => {
        moment.locale('es')
        return moment(date).format(format)
    }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center margin">
                    <h3>Su cita para el día {this.dateParse(this.state.appointment.date, "LL")} a las {this.dateParse(this.state.appointment.date, "LT")} ha sido creada y se encuentra pendiente de confirmación</h3>
                </Row>
                <Row>
                    <Col>
                        <p>Su nº de referencia asignado es: <strong>{this.state.reference}</strong>. En breve recibirá un email confirmándole la cita o nos pondremos en contacto con usted si fuese necesario.</p>
                        <Button variant="outline-info" size="sm">
                            <Link to='/'>Volver</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AppointmentCreated;