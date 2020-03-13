import React, { Component } from 'react'
import AdminMenu from '../AdminMenu'

import DataChartService from '../../../../services/datachart.services'

import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2'

import moment from 'moment'
import '../../../../moment.locale'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class DataChart extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            labels: [],
            charData: {
                labels: [],
                datasets: [
                    {
                        label: 'Confirmadas',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: []
                    },
                    {
                        label: 'Canceladas',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(199,156,255,0.2)',
                        borderColor: 'rgba(199,156,255,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: []
                    }
                ]
            }
        }
        this.datachartService = new DataChartService()
    }

    componentDidMount = () => this.getData()

    getData = () => {
        let data = []
        let labels = []
        this.datachartService.getData()
            .then(response => {
                data.labels = response.labels.map(label => moment(label).format('l'))
                data.push(response.confirmedAppointments.map(item => item.appointments))
                data.push(response.cancelledAppointments.map(item => item.appointments))
                this.setState({ data, labels })
            })
            .catch(err => console.log(err))
    }

    buildData = () => {
        let data = { ...this.state.charData }

        data.datasets[0]['data'] = this.state.data[0]
        data.datasets[1]['data'] = this.state.data[1]
        data['labels'] = this.state.data.labels
        return data
    }

    render() {
        const data = this.buildData()
        return (
            <Container fluid>
                <Row className="margin">
                    <AdminMenu />
                    <Col sm={9}>
                        <h3>Datos de los últimos 30 días</h3>
                        <Line data={data} redraw={true} />
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

export default DataChart