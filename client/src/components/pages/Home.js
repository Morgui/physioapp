import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


class Home extends Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center margin">
                    <h1 className="textIndex">Profesional experto en salud y bienestar</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm={{ span: 4 }}>
                        <Image src="/images/fisio1.jpg" alt="imagen home" fluid />
                    </Col>
                    <Col>
                        <p>Ofrecemos un trato personalizado que busca una mejoría duradera en la mayor brevedad posible. Trabajamos vocacionalmente y nos encanta verle satisfecho, ese es nuestro mejor premio.
                        No dude en pedir su cita online y seguro que no se arrepentirá. Nuestra combinación de experiencia, profesionalidad, vocación y atención al cliente es inmejorable.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-end margin">
                    <Col md={{ offset: 6 }}>
                        <Link to='appointment'>
                            <Button variant="outline-info" size="md">Pide tu Cita</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home