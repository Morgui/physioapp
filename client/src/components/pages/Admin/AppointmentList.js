import React, { Component } from 'react'

import AppointmentService from '../../../services/appointment.services'
import AppointmentCard from './appointmentCard'

class AppointmentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appointments: []
        }
        this.service = new AppointmentService()
    }

    componentDidMount = () => {
        this.getAppointments()
    }

    getAppointments = () => {
        return this.service.getAllAppointments().then(results => {
            this.setState({ appointments: results })
            console.log(results)
        })
    }

    render() {
        return (
            <>
                <p>AppointmentList</p>

                {this.state.appointments.map(elm => <AppointmentCard key={elm._id} item={elm} />)}
                {/*{this.state.appointments.map(elm => <AppointmentCard key={elm._id} {...elm} />)} */}
            </>
        )
    }

}

export default AppointmentList