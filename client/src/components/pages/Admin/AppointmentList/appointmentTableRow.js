import React, { Component } from 'react'

import moment from 'moment';
import '../../../../moment.locale'

class AppointmentTableRow extends Component {

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
                <tr>
                    <td>{this.state.appointment.patientId.name} {this.state.appointment.patientId.surname}</td>
                    <td>{this.dateParse(this.state.appointment.date, "L")}</td>
                    <td>{this.dateParse(this.state.appointment.date, "LT")}</td>
                </tr>
            </>
        )
    }

}


export default AppointmentTableRow