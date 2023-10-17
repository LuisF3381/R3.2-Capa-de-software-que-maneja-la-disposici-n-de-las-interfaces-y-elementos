import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

import fajo_billetes from '../../images/fajo_billetes.png'
import sol_icon from '../../images/sol_icon.png'
import dolar_icon from '../../images/dolar_icon.png'

// Para traducir el texto
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


function SeleccionCuenta() {
    const navigate = useNavigate();
      // Para el traductor de texto
    const { t, i18n } = useTranslation();

    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
     const handleCancel = () => {
        // Lógica para el botón de cancelar
    };

    
    // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate('/retiro/seleccion-cuenta/2');
      };


    
    return (

        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>

            <div style={{ height: '8px' }} />
            <Row className="align-items-center justify-content-between no-gutters">
                <Col md={7}>
                    <h3>Selecciona una de tus cuentas</h3>
                    <h5>y comienza a retirar</h5>
                </Col>

                <Col md={5} className="d-flex align-items-center">
                <Card
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '75px', backgroundColor: '#FFF6A7',borderRadius: '0', }}
                        >                        
                            <Card.Body className="m-0 p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={fajo_billetes} alt="Descripción" width={55} height={50} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h9 >Billetes Disponibles</h9>
                                        </Row>
                                        <Row>
                                            <h11>Soles: S/20 S/50 S/100 </h11>
                                        </Row>
                                        <Row>
                                            <h11>Dolares: US$20 US$50</h11>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>

            <div style={{ height: '40px' }} />
            {/*AQUI VAN LAS CUENTAS  QUE SE PUEDEN SELECCIONAR*/}
            <Row className="justify-content-center">
                <Col xs="auto"></Col>
                <Col xs={7} >
                    {/*PRIMERA CUENTA*/}
                    <Row className="justify-content-center">
                        <Card
                            onClick={handleCardClick1}
                            style={{ width: '520px', height: '80px', cursor: 'pointer' }}
                        >
                            <Card.Body className="m-0 p-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                <Image src={sol_icon} alt="Descripción" width={40} height={40} />
                                </Col>
                                <Col xs="auto">
                                <Row>
                                    <h7 className="m-0">Cuenta Sueldo - 324</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">825-2949840</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">Moneda: Soles - Saldo: S/****</h7>
                                </Row>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '30px' }} />
                    {/*SEGUNDA CUENTA*/}
                    <Row className="justify-content-center">
                        <Card
                            onClick={handleCardClick1}
                            style={{ width: '520px', height: '80px', cursor: 'pointer' }}
                        >
                            <Card.Body className="m-0 p-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                <Image src={dolar_icon} alt="Descripción" width={40} height={40} />
                                </Col>
                                <Col xs="auto">
                                <Row>
                                    <h7 className="m-0">Cuenta Ahorros - 324</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">825-5942840</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">Moneda: Dolares - Saldo: US$****</h7>
                                </Row>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Row>

                </Col>
                <Col xs="auto"></Col>
            </Row>


            <div style={{ height: '15px' }} />
            {/*Aqui va el boton*/}
            <Row className="d-flex justify-content-center mt-4">
                <Col xs="auto">
                    <Button variant="danger" style={{ width: '150px', marginRight: '500px' }} onClick={handleCancel}>
                    {t('exit')}
                    </Button>
                </Col>
            </Row>

            </Container>
            </Card>
        </Container>
        );
    }
    
    export default SeleccionCuenta;