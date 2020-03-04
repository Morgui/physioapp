import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AppointmentCreated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointment: props.match.params
        }
    }

    render() {
        return (
            // props para sacar Reference, props.match.params.reference
            <>
                <br /><br />
                <h3>Su cita ha sido creada y se encuentra pendiente de confirmación</h3>
                <hr />
                <p>Su nº de referencia asignado es: <strong>{this.state.appointment.reference}</strong>.</p>
                <p>En breve recibirá un email confirmándole la cita o nos pondremos en contacto con usted si fuese necesario.</p>
                <br />
                <Link to="/appointment">Volver</Link>
            </>
        )
    }
}

export default AppointmentCreated;