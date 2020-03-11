import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PatientService from '../../../../services/patient.services'
import AppointmentService from '../../../../services/appointment.services'

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
            <>
                <h1>Historial</h1>
                <p><Link to={`/admin/patients/${this.state.patient._id}/edit`}>Editar</Link></p>
                <h5>Nombre Completo</h5>
                <p>{this.state.patient.name} {this.state.patient.surname}</p>
                <h5>Datos de Contacto</h5>
                <p>{this.state.patient.email}</p>
                <h5>Edad</h5>
                <h5>Sexo</h5>
                <h5>Motivos de la consulta</h5>

                <ul>
                    {this.state.appoinments.map(appointment => <li>{appointment.motive} - {appointment.date}</li>)}
                </ul>

                <h5>Antecedentes</h5>
                <p>Antecedentes: se recogen aquí tanto los antecedentes personales (lesiones pasadas, operaciones, tratamientos en curso…) como familiares</p>

                <br />
                <Button variant="outline-info" size="sm">
                    <Link to='/admin/patients'>Volver</Link>
                </Button>
            </>
        )
    }
}
export default PatientDetails