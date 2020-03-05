import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import moment from 'moment';
import '../../../../moment.locale'

class AppointmentCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: props.item
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
                            <Card.Text>{this.state.item.patientId.name} {this.state.item.patientId.surname}</Card.Text>
                            <hr></hr>
                            <Card.Text>{this.dateParse(this.state.item.date, "L")}</Card.Text>
                            <Card.Text>{this.dateParse(this.state.item.date, "LT")} </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }

}


export default AppointmentCard