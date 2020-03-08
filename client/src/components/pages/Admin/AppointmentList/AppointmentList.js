import React, { Component } from 'react'

import AppointmentService from '../../../../services/appointment.services'
import AppointmentCard from './appointmentCard'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

import AppointmentTableRow from './appointmentTableRow'
import AdminMenu from '../AdminMenu'

class AppointmentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appointments: []
        }
        this.appointmentService = new AppointmentService()
    }

    componentDidMount = () => this.getAppointments()

    getAppointments = () => {
        return this.appointmentService.getAllAppointments()
            .then(results => {
                this.setState({ appointments: results })
                console.log(results)
            })
            .catch(err => console.log(err))
    }

    //comparar si 2 fechas son el mismo día
    isSameDay = (date1, date2) => (date1.getMonth() === date2.getMonth()) && (date1.getFullYear() === date2.getFullYear()) && (date1.getDate() === date2.getDate())

    //comparar si futureDate es posterior a date
    isFutureDate = (date, futureDate) => (futureDate.getMonth() > date.getMonth()) || (futureDate.getFullYear() > date.getFullYear()) || (futureDate.getDate() > date.getDate())

    getAppointmentsDay = (day, month, year) => {
        //Filtra la lista de citas 
        let dayToFilter = new Date(year, month, day)
        return this.state.appointments.filter(appointment => {
            let date = new Date(Date.parse(appointment.date))
            return this.isSameDay(dayToFilter, date)
        })
    }

    getFutureAppointments = (day) => {
        // Filtra la lista de citas dejando solo las de fechas superiores al today por parametro
        return this.state.appointments.filter(appointment => {
            let date = new Date(Date.parse(appointment.date))
            return this.isFutureDate(day, date)
        })
    }


    render() {
        const today = new Date()

        return (
            <Container fluid>
                <Row>
                    <AdminMenu />
                    <Col sm={8}>
                        <h4>Citas de HOY</h4>
                        <Row>

                            {this.getAppointmentsDay(today.getDate(), today.getMonth(), today.getFullYear()).length > 0 ? this.getAppointmentsDay(today.getDate(), today.getMonth(), today.getFullYear()).map(elm => <AppointmentCard key={elm._id} appointment={elm} />) : <p>No hay citas para hoy</p>}
                        </Row>
                        <hr />

                        <h5>Próximas Citas</h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.getFutureAppointments(today).map(elm => <AppointmentTableRow key={elm._id} appointment={elm} />)}
                            </tbody>
                        </Table>
                        <br />
                        <Button variant="outline-info" size="sm">
                            <Link to='/admin'>Volver</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AppointmentList