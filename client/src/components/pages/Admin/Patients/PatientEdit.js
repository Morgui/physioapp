import React, { Component } from 'react'

import PatientService from '../../../../services/patient.services'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

    componentDidMount = () => this.getPatientDetail(this.state.patientId)

    getPatientDetail = (id) => {
        return this.patientService.getPatientDetails(id)
            .then(results => {
                const { name, surname, genre, age, antecedents, email } = results
                this.setState({ patient: { name, surname, genre, age, antecedents, email } })
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            patient: { ...this.state.patient, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.patientService.updatePatient(this.state.patientId, this.state.patient)
            .then(patient => {
                this.props.history.push(`/admin/patients/${patient._id}`)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.patient.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control name="surname" type="text" value={this.state.patient.surname} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" value={this.state.patient.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edad</Form.Label>
                        <Form.Control name="age" type="number" value={this.state.patient.age || 0} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sexo</Form.Label>
                        <select name="genre" value={this.state.patient.genre || ""} className="form-control" onChange={this.handleChange}>
                            <option value="">---</option>
                            <option value="mujer">Mujer</option>
                            <option value="hombre">Hombre</option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Antecedentes</Form.Label>
                        <textarea name="antecedents" className="form-control" onChange={this.handleChange} value={this.state.patient.antecedents}>
                        </textarea>
                    </Form.Group>
                    <Button variant="success" type="submit">Guardar</Button>
                </Form>
            </Container>
        )
    }
}

export default PatientEdit