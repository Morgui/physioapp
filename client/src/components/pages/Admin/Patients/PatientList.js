import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AdminMenu from '../AdminMenu'

import PatientService from '../../../../services/patient.services'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class PatientList extends Component {

    constructor() {
        super();

        this.state = {
            patients: [],
            searchBar: ''
        }
        this.patientService = new PatientService()
    }

    handleChange = e => this.setState({ searchBar: e.target.value })

    render() {
        return (
            <Container fluid>
                <Row>
                    <AdminMenu />
                    <Col>
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

                    </Col>
                </Row>
            </Container>
        )
    }

}

export default PatientList