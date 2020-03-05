import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import moment from 'moment';
import '../../../../moment.locale'

class AppointmentCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appointment: props.appointment
        }
    }

    dateParse = (date, format) => {
        moment.locale('es')
        return moment(date).format(format)
    }
    render() {
        return (
            <>
                <Col md={2}>
                    <Card className="card-appointment">
                        <Card.Body>
                            <Card.Text>{this.state.appointment.patientId.name} {this.state.appointment.patientId.surname}</Card.Text>
                            <hr></hr>
                            <Card.Text>{this.dateParse(this.state.appointment.date, "L")}</Card.Text>
                            <Card.Text>{this.dateParse(this.state.appointment.date, "LT")} </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }

}


export default AppointmentCard