import React, { Component } from 'react'

import PatientService from '../../../../services/patient.services'

class PatientEdit extends Component {
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
            }
        }
        this.patientService = new PatientService()
    }


    render() {
        return (

            <h1>Prueba</h1>
        )
    }
}

export default PatientEdit