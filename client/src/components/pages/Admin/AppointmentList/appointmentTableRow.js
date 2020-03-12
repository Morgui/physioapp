import React, { Component } from 'react'

import moment from 'moment';
import Button from 'react-bootstrap/Button'
import AppointmentService from '../../../../services/appointment.services'

import '../../../../moment.locale'

class AppointmentTableRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appointment: props.appointment
        }
        this.appointmentService = new AppointmentService()
    }

    dateParse = (date, format) => {
        moment.locale('es')
        return moment(date).format(format)
    }

    updateAppointmentStatus = (id, status) => {
        return this.appointmentService.updateAppointmentStatus(id, status)
            .then(results => {
                this.setState({ appointment: { ...this.state.appointment, status } })
            })
            .catch(err => console.log(err))
    }

    confirmAppointment = (e) => this.updateAppointmentStatus(this.state.appointment._id, 'accepted')
    cancelAppointment = (e) => this.updateAppointmentStatus(this.state.appointment._id, 'cancelled')

    confirmButton = (appointment) => appointment.status === 'pending' ? <Button size="sm" variant="success" onClick={this.confirmAppointment}>Confirmar</Button> : ''
    cancelButton = (appointment) => appointment.status !== 'cancelled' ? <Button size="sm" variant="danger" onClick={this.cancelAppointment}>Cancelar</Button> : ''

    render() {
        return (
            <>
                <tr>
                    <td>{this.state.appointment.patientId.name} {this.state.appointment.patientId.surname}</td>
                    <td>{this.dateParse(this.state.appointment.date, "L")}</td>
                    <td>{this.dateParse(this.state.appointment.date, "LT")}</td>
                    {/* <td>{this.statusButton(this.state.appointment)}</td> */}
                    <td>{this.confirmButton(this.state.appointment)}</td>
                    <td>{this.cancelButton(this.state.appointment)}</td>
                </tr>
            </>
        )
    }

}


export default AppointmentTableRow