import React, { useState, useEffect } from 'react';

import BankComponent from '../components/generals/upVar';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';

import imagen_billetes from '../../images/billetes_disponibles.png';
import { useNavigate } from 'react-router-dom';

import advertencia from '../../images/advertencia.png'
import { useParams } from 'react-router-dom';


function SeleccionMonto() {
    let { idUserModel, idCuenta } = useParams();
    const navigate = useNavigate();
    var [monto, setMonto] = useState(''); // Aquí se guarda el valor


    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
        // Lógica para el botón de cancelar
        navigate(`/retiro/seleccion-moneda/${idUserModel}/${idCuenta}`);
    };
    
    const handleContinue = () => {
        // Lógica para el botón de continuar
        navigate(`/retiro/finalizado/2/10`);
    };


    const [isPressedA1, setIsPressedA1] = useState(false);
    const [isPressedA2, setIsPressedA2] = useState(false);
    const [isPressedB1, setIsPressedB1] = useState(false);
    const [isPressedB2, setIsPressedB2] = useState(false);


    // PARA EL MANEJO DE LOS BOTONES
    const handleCardClickA1 = () => {
        setMonto('');
        if (isPressedA1===false && isPressedB1===false && isPressedA2===false && isPressedB2===false){
            setIsPressedA1(!isPressedA1);
        }else{
            if(isPressedB1===true)
            setIsPressedB1(!isPressedB1); // Cambia el estado de presionado al hacer clic
            if(isPressedB2===true)
            setIsPressedB2(!isPressedB2);
            if(isPressedA2===true)
            setIsPressedA2(!isPressedA2);

            setIsPressedA1(!isPressedA1);
        }
    };


    const handleCardClickA2 = () => {
        setMonto('');
        if (isPressedA1===false && isPressedB1===false && isPressedA2===false && isPressedB2===false){
            setIsPressedA2(!isPressedA2);
        }else{
            if(isPressedB1===true)
            setIsPressedB1(!isPressedB1); // Cambia el estado de presionado al hacer clic
            if(isPressedB2===true)
            setIsPressedB2(!isPressedB2);
            if(isPressedA1===true)
            setIsPressedA1(!isPressedA1);

            setIsPressedA2(!isPressedA2);
        }
    };


    const handleCardClickB1 = () => {
        setMonto('');
        if (isPressedA1===false && isPressedB1===false && isPressedA2===false && isPressedB2===false){
            setIsPressedB1(!isPressedB1);
        }else{
            setIsPressedB1(!isPressedB1); // Cambia el estado de presionado al hacer clic

            if(isPressedB2===true)
            setIsPressedB2(!isPressedB2);
            if(isPressedA1===true)
            setIsPressedA1(!isPressedA1);
            if(isPressedA2===true)
            setIsPressedA2(!isPressedA2);
        }
    };

    const handleCardClickB2 = () => {
        setMonto('');
        if (isPressedA1===false && isPressedB1===false && isPressedA2===false && isPressedB2===false){
            setIsPressedB2(!isPressedB2);
        }else{

            setIsPressedB2(!isPressedB2);

            if(isPressedB1===true)
            setIsPressedB1(!isPressedB1); // Cambia el estado de presionado al hacer click
            if(isPressedA1===true)
            setIsPressedA1(!isPressedA1);
            if(isPressedA2===true)
            setIsPressedA2(!isPressedA2);
        }
    };

    const clearMontoPredef = () => {
        setIsPressedA1(false);
        setIsPressedB1(false);
    };    


    const handleInputChange = (event) => {
        setMonto(event.target.value);
    };

    console.log("monto",monto);

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>
            <div style={{ height: '8px' }} />

            <Row className="align-items-center justify-content-between no-gutters">
                <Col md={7}>
                    <h3>Selecciona el monto a retirar</h3>
                    <h5>Cuenta de cargo:  Cuenta de ahorro - 324</h5>
                    <h5>Saldo: S/1200</h5>
                </Col>

                <Col md={5} className="d-flex align-items-center">
                        <Card
                            className="d-flex align-items-center"
                            style={{ width: '250px', height: '60px', backgroundColor: '#FFF6A7',borderRadius: '0', }}
                        >                        
                            <Card.Body className="m-0 p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={imagen_billetes} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h9 >Billetes Disponibles</h9>
                                        </Row>
                                        <Row>
                                            <h11>S/20 S/50 S/100</h11>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>


            {/*AQUI VAN LOS 2 COLUMNS*/}
            {/*AQUI SE PUEDEN SELECCIONAR LOS TIPOS DE MONEDA RETIRAR */}
            <div style={{ height: '10px' }} />
            <Row className="justify-content-center">
                <Col xs={5} >
                    {/*COL PARA LOS 4 BOTONES A PRESIONAR */}
                    <h5>Selecciona algun monto:</h5>
                    <div style={{ height: '15px' }} />
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
                                                <h7 className="m-0">S/20</h7>
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
                                                <h7 className="m-0">S/50</h7>
                                            </Row>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                            </Card>
                            </Row>
                            <div style={{ height: '30px' }} />
                        </Col>
                    </Row>
                    
                    {/*2 BOTONES */}
                    <Row>
                    <Col xs={5} >
                            {/*TERCERA OPCION*/}
                            <Row className="justify-content-center">
                                <Card
                                    onClick={handleCardClickA2}
                                    style={{ width: '250px', height: '45px', cursor: 'pointer',backgroundColor: isPressedA2 ? '#EBFCFF' : 'white', // Cambia el color de fondo
                                    borderColor: isPressedA2 ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                                    boxShadow: isPressedA2 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                    transition: 'box-shadow 0.3s ease', }}
                                >
                                    <Card.Body className="m-0 p-2">
                                        <Row className="align-items-center">
                                            <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0">S/100</h7>
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
                            {/*CUARTA OPCION*/}
                            <Row className="justify-content-center">
                            <Card
                                    onClick={handleCardClickB2}
                                    style={{ width: '250px', height: '45px', cursor: 'pointer', backgroundColor: isPressedB2 ? '#EBFCFF' : 'white', // Cambia el color de fondo
                                    borderColor: isPressedB2 ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                                    boxShadow: isPressedB2 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                    transition: 'box-shadow 0.3s ease',}}
                                >
                                    <Card.Body className="m-0 p-2">
                                        <Row className="align-items-center">
                                            <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0">S/150</h7>
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
                
                <Col xs="auto"></Col>
                <Col xs={5}>
                    <h5>O digita otro monto:</h5>
                    <div style={{ height: '15px' }} />
                    {/*INGRESAR MONTO A RETIRAR*/}
                    <Row className="justify-content-center">
                        <Form.Control
                        type="number"
                        placeholder="Ingrese monto S/"
                        value={monto} 
                        onChange={handleInputChange}  // Actualiza el estado cuando el valor del input cambia
                        style={{
                            fontSize: '20px',        // Establece el tamaño de la fuente
                            textAlign: 'center'      // Centra el texto horizontalmente
                        }}
                        onClick={clearMontoPredef}
                        />
                    </Row>

                    <div style={{ height: '30px' }} />

                    <Row className="justify-content-center">
                        <Card
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', backgroundColor: '#FFF6A7',borderRadius: '0', }}
                        >                        
                            <Card.Body className="m-0 p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={advertencia} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h9>Cobro de operación</h9>
                                        </Row>
                                        <Row>
                                            <h11>Se realizara el cobro de S/0.20</h11>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>

                </Col>
            </Row>
                <div style={{ height: '15px' }} />
                {/*BOTONES PARA CONFIRMAR Y REGRESAR*/}
                <Row className="d-flex justify-content-center mt-4">
                    <Col xs="auto">
                        <Button  
                            style={{ 
                            width: '150px', 
                            margin: '0 100px', 
                            backgroundColor: '#B5ADAE' 
                        }} 
                        onClick={handleCancel}>
                        REGRESAR
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button 
                            variant="primary" 
                            style={{ 
                                width: '150px', 
                                margin: '0 100px', 
                                backgroundColor: '#84DD7C' 
                            }} 
                            onClick={handleContinue}>
                            CONFIRMAR
                        </Button>

                    </Col>
                </Row>

            </Container>
            </Card>
        </Container>
        );
    }

export default SeleccionMonto;