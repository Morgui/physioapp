import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PatientTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patient: props.patient
        }
    }

    render() {
        return (
            <tr>
                <td><Link style={{ color: "black" }} to={`/admin/patients/${this.state.patient._id}`}>{this.state.patient.name} {this.state.patient.surname}</Link></td>
                <td>{this.state.patient.email}</td>
            </tr>

        )
    }

}


export default PatientTable