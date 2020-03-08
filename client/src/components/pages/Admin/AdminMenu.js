import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class AdminMenu extends Component {


    render() {
        return (
            <Col sm={1}>
                <ul>
                    <li><Link to="/admin/appointments">Citas</Link></li>
                    <li><Link to="/admin/patients">Pacientes</Link></li>
                </ul>
            </Col>
        )
    }

}


export default AdminMenu