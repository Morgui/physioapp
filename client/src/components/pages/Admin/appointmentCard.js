import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class AppointmentCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <>
                <Col md={4}>
                    <Card className="card-appointment">
                        <Card.Body>
                            <Card.Title>{this.state.item.patientId.name}</Card.Title>
                            <Card.Text>{this.state.item.patientId.surname}</Card.Text>
                            <hr></hr>
                            <Card.Text>{this.state.item.date}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }

}


export default AppointmentCard