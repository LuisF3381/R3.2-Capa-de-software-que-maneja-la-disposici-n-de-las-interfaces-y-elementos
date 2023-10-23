
import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';
import { useNavigate } from 'react-router-dom';

import consulta from '../../images/operaciones/consulta_saldo.png'
import { useParams } from 'react-router-dom';


function SeleccionCuentaSaldo() {
    const { idUserModel } = useParams();
    const navigate = useNavigate();

    const [isPressed, setIsPressed] = useState(false);
    const [isPressedA, setIsPressedA] = useState(false);

    const [isPressedB1, setIsPressedB1] = useState(false);
    const [isPressedA1, setIsPressedA1] = useState(false);

        // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate('/retiro/seleccion-cuenta/2');
    };

    const handleCardClick = () => {
        if (isPressed === false && isPressedA === false ) {
            setIsPressed(!isPressed);
        }
        else{
            setIsPressed(!isPressed); // Cambia el estado de presionado al hacer clic
            setIsPressedA(!isPressedA);
        }

    };

    const handleCardClickA = () => {
        if (isPressedA===false && isPressed===false){
            setIsPressedA(!isPressedA);
        }else{
            setIsPressedA(!isPressedA); // Cambia el estado de presionado al hacer clic
            setIsPressed(!isPressed);
        }
    };

    const handleCardClickA1 = () => {
        if (isPressedA1===false && isPressedB1===false){
            setIsPressedA1(!isPressedA1);
        }else{
            setIsPressedA1(!isPressedA1); // Cambia el estado de presionado al hacer clic
            setIsPressedB1(!isPressedB1);
        }
    };

    const handleCardClickB1 = () => {
        if (isPressedB1===false && isPressedA1===false){
            setIsPressedB1(!isPressedB1);
        }else{
            setIsPressedB1(!isPressedB1); // Cambia el estado de presionado al hacer clic
            setIsPressedA1(!isPressedA1);
        }
    };

    //AQUI DEBEMOS VER EL SALIR Y EL CONTINUAR
    const handleCancel = () => {
        // Lógica para el botón de continuar
        navigate(`/principal/${idUserModel}`);
    };
    
    const handleContinue = () => {
        //Nos dirigimos a la pantalla de resumen
        navigate(`/consulta/finalizado/${idUserModel}`);
    };  


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>
            
            <div style={{ height: '8px' }} />
            <Row>
                <Col md={7}>
                    <h3>Seleccion de cuenta</h3>
                    <h5 style={{ marginRight : '10px' }}>selecciona la cuenta a la que deseas consultar</h5>
                </Col>
                <Col md={5} className="d-flex align-items-center">
                </Col>
            </Row>
            <div style={{ height: '15px' }} />

            {/*AQUI SE PUEDEN SELECCIONAR LOS TIPOS DE MONEDA RETIRAR */}
            <Row>
                <Col xs={1}></Col>
                <Col xs={5} >
                    {/*PRIMERA OPCION*/}
                    <Row className="justify-content-center">
                        <Card
                            onClick={handleCardClickA}
                            style={{ width: '320px', height: '85px', cursor: 'pointer',backgroundColor: isPressedA ? '#EBFCFF' : 'white', // Cambia el color de fondo
                            borderColor: isPressedA ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                            boxShadow: isPressedA ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                            transition: 'box-shadow 0.3s ease', }}
                        >
                            <Card.Body className="m-0 p-2">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Row>
                                        <h6 className="m-0">Cuenta Ahorros - 324</h6>
                                    </Row>
                                    <Row>
                                        <h7 className="m-0">825-5942840</h7>
                                    </Row>
                                    <Row>
                                        <h7 className="m-0">Moneda: Soles</h7>
                                    </Row>
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                    </Row>
                    <div style={{ height: '30px' }} />
                </Col>
                
                <Col xs="auto"></Col>
                <Col xs={5}>
                    {/*SEGUNDA OPCION*/}
                    <Row className="justify-content-center">
                    <Card
                            onClick={handleCardClick}
                            style={{ width: '320px', height: '85px', cursor: 'pointer', backgroundColor: isPressed ? '#EBFCFF' : 'white', // Cambia el color de fondo
                            borderColor: isPressed ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                            boxShadow: isPressed ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                            transition: 'box-shadow 0.3s ease',}}
                        >
                            <Card.Body className="m-0 p-2">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Row>
                                        <h6 className="m-0">Cuenta de ahorro - 456</h6>
                                    </Row>
                                    <Row>
                                        <h7 className="m-0">325-7949240</h7>
                                    </Row>
                                    <Row>
                                        <h7 className="m-0">Moneda: Dolares</h7>
                                    </Row>
                                    </Col>
                                </Row>
                                </Card.Body>
                    </Card>
                    </Row>
                    <div style={{ height: '30px' }} />
                </Col>
            </Row>

            {/*AQUI PUEDE SELECIONARSE LA CONSTANCIA DEL SALDO*/}
            <Row>
                <h5>Deseo consultar mi saldo:</h5>
            </Row>
            <div style={{ height: '15px' }} />
            <Row>
                <Col xs={1}></Col>
                <Col xs={7}>
                <Row>
                    <Col xs={5} >
                        {/*PRIMERA OPCION*/}
                        <Row className="justify-content-center">
                            <Card
                                onClick={handleCardClickA1}
                                style={{ width: '250px', height: '45px', cursor: 'pointer',backgroundColor: isPressedA1 ? '#EBFCFF' : 'white', // Cambia el color de fondo
                                borderColor: isPressedA1 ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                                boxShadow: isPressedA1 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                transition: 'box-shadow 0.3s ease', }}
                            >
                                <Card.Body className="m-0 p-2">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">EN VOUCHER</h7>
                                        </Row>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                                </Card>
                        </Row>
                        <div style={{ height: '30px' }} />
                    </Col>
                    
                    <Col xs="auto"></Col>
                    <Col xs={5}>
                        {/*SEGUNDA OPCION*/}
                        <Row className="justify-content-center">
                        <Card
                                onClick={handleCardClickB1}
                                style={{ width: '250px', height: '45px', cursor: 'pointer', backgroundColor: isPressedB1 ? '#EBFCFF' : 'white', // Cambia el color de fondo
                                borderColor: isPressedB1 ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                                boxShadow: isPressedB1 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                transition: 'box-shadow 0.3s ease',}}
                            >
                                <Card.Body className="m-0 p-2">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">EN PANTALLA</h7>
                                        </Row>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                        </Card>
                        </Row>
                        <div style={{ height: '30px' }} />
                    </Col>
                </Row>

                </Col>
                <Col xs={4}>
                    <Image src={consulta} alt="Descripción" width={60} height={60} />
                </Col>
            </Row>


        <Row className="d-flex justify-content-center mt-4">
            <Col xs="auto">
                <Button variant="primary" style={{ width: '150px', margin: '0 100px', backgroundColor: '#B5ADAE' }} onClick={handleCancel}>
                REGRESAR
                </Button>
            </Col>
            <Col xs="auto">
                <Button variant="primary" style={{ width: '150px', margin: '0 100px' }} onClick={handleContinue}>
                CONTINUAR
                </Button>
            </Col>
        </Row>

            </Container>
            </Card>
        </Container>
        );
    }
    
    export default SeleccionCuentaSaldo;

