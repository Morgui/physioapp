import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class AdminIndex extends Component {

    render() {
        return (
            <>
                <p>Index</p>
                <br />
                <Link to="/admin/appointments">
                    <h4>Citas</h4>
                </Link>
                <Link to="/admin/patients">
                    <h4>Pacientes</h4>
                </Link>
            </>
        )
    }

}

export default AdminIndex