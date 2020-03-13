import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PatientService from '../../../../services/patient.services'
import PatientTable from './patientTable'

import AdminMenu from '../AdminMenu'
import './searchBar.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'


class PatientList extends Component {

    constructor() {
        super();

        this.state = {
            patients: [],
            searchBar: ''
        }
        this.patientService = new PatientService()
    }

    componentDidMount = () => this.getPatients()

    getPatients = () => {
        return this.patientService.getAllPatients()
            .then(results => {
                console.log(results)
                this.setState({ patients: results })
            })
            .catch(err => console.log(err))
    }


    handleChange = e => this.setState({ searchBar: e.target.value })

    render() {
        return (
            <Container fluid>
                <Row className="margin">
                    <AdminMenu />
                    <Col sm={8}>
                        <h3>Pacientes</h3>
                        <hr />
                        <Form>
                            <Form.Group >
                                <Form.Control
                                    type="text"
                                    name="input"
                                    placeholder="Search..."
                                    value={this.state.searchBar}
                                    onChange={this.handleChange}
                                    className="search-bar"
                                />
                                <i className="fas fa-search"></i>
                            </Form.Group>
                        </Form>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre Completo</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.patients.filter(elm => `${elm.name} ${elm.surname} ${elm.email}`.toLowerCase().includes(this.state.searchBar.toLowerCase())).map(elm => <PatientTable key={elm._id} patient={elm} />)}
                            </tbody>
                        </Table>
                        <Row className="margin">
                            <Col>
                                <Link to='/admin'>
                                    <Button variant="outline-info" size="sm">Volver</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default PatientList