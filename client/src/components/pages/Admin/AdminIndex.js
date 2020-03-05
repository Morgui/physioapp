import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class AdminIndex extends Component {

    render() {
        return (
            <>
                <p>AdminIndex</p>
                <br />
                <Link to="/admin/appointments">
                    <h3>AppointmentList</h3>
                </Link>
            </>
        )
    }

}

export default AdminIndex