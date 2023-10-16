import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import logo from '../../../images/imagenes_welcome/miux_logo.png';

const BankComponent = () => {
    return (
        <Row  className="align-items-center" style={{ background: '#D9D9D9', padding: '10px 20px', flex: 1, height: '88px' }}>
            <Col xs={1}>
                <Image src={logo} rounded style={{ width: '50px', height: 'auto' }} />
            </Col>
            <Col>
                <h1 style={{ margin: 10, fontWeight: 'bold', fontSize: '24px' }}>MiUX BANK</h1>
            </Col>
            <Col>
                <Row>
                    <h7 style={{ fontWeight: 'bold', textAlign: 'right' }}>N.° cajero: 4868</h7>
                </Row>
                <Row>
                    <h7 style={{ fontWeight: 'bold', textAlign: 'right' }}>Atención al cliente: +51 404 000</h7>
                </Row>
            </Col>
        </Row>
    );
}

export default BankComponent;
