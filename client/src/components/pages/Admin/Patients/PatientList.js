import React, { Component } from 'react'

import PatientService from '../../../../services/patient.services'

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class PatientList extends Component {

    constructor() {
        super();

        this.state = {
            patients: [],
            searchBar: ''
        }
        this.service = new PatientService() //this.service debería ser this.patientservice o PatientService
    }

    handleChange = e => {
        this.setState({ searchBar: e.target.value });
    }

    render() {
        return (
            <>
                <h3>Pacientes</h3>
                <hr />

                <input
                    type="text"
                    className="input-search-bar"
                    name="searchBar"
                    value={this.state.searchBar}
                    onChange={this.handleChange}
                />
                <br /><br />

                <Button variant="outline-info" size="sm">
                    <Link to='/admin'>Volver</Link>
                </Button>
            </>
        )
    }

}

export default PatientList