import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import retiro from '../../images/operaciones/retiro_efectivo.png';
import consulta from '../../images/operaciones/consulta_saldo.png'
import deposito from '../../images/operaciones/deposito_efectivo.png'
import otras from '../../images/operaciones/otras_operaciones.png'

import fast_operation from '../../images/imagenes_perfil/senior/fast_option.png'
import last_operation from '../../images/imagenes_perfil/frecuente/ultima_operacion.png'

// Para las operaciones rapidas
import fast_retiro from '../../images/operaciones/fast/fast_retiro.png'
import fast_deposito from '../../images/operaciones/fast/fast_deposito.png'

import { useParams } from 'react-router-dom';

// Para traducir el texto
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function MenuATM() {
    const { idUserModel } = useParams();
    const navigate = useNavigate();
      // Para el traductor de texto
    const { t, i18n } = useTranslation();

    const [selectedOption, setSelectedOption] = useState('');

    var idCuenta = 2;

    const handleOptionChange = (event) => {
        const selectedLang = event.target.value;
        setSelectedOption(selectedLang);
        console.log("selectedOption",selectedOption);
        // Aquí puedes agregar cualquier otra lógica que desees ejecutar cuando el idioma cambie
    };


    // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/retiro/seleccion-cuenta/${idUserModel}`);
      };

    // Para la segunda opcion mas usada
    const handleCardClick2 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/consulta/seleccion-cuenta/${idUserModel}`);
      };

    // Para la tercera opcion mas usada
    const handleCardClick3 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/deposito/seleccion-cuenta/${idUserModel}`);
      };
    
    const handleCardOP2 = () =>{

        navigate(`/deposito/ingreso-billetes/${idUserModel}/${idCuenta}`);
    };




    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
        // Lógica para el botón de cancelar
        navigate(`/inicio`);
    };

    const handleContinue = () => {
        // Lógica para el botón de continuar
    };


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                {/*AQUI VA EL NOMBRE Y SI CAMBIA EL IDIOMA O NO AQUI*/}
                <Row className="justify-content-center align-items-center my-2">
                <Col xs={9} >
                    <h4>¡Hola, Adriana Rosas!</h4>
                    <h5>¿Qué quieres hacer hoy?</h5>
                </Col>
                <Col xs={3} className="text-center">
                    <Form.Group>
                        <Form.Control
                            as="select"
                            onChange={handleOptionChange}
                            value={selectedOption}
                            className="text-right form-control-sm"
                        >
                            <option value="">Cambiar idioma</option>
                            <option value="es">Español</option>
                            <option value="qu">Quechua</option>
                            {/* Agrega más opciones de idioma según sea necesario */}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>


            {/*AQUI VAN LOS 3 CARDS PRINCIPALES */}
            <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClick1} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={retiro} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold' }}>Retiro de efectivo</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClick2} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={consulta} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold' }}>Consulta de saldo</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClick3} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={deposito} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold' }}>Deposito de efectivo</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*Aqui van las descripciones*/}
            <Row className="d-flex justify-content-center">
                <Col xs="auto">
                    <div className="d-flex align-items-center">
                        <Image src={fast_operation} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6>Operaciones Rápidas</h6>
                    </div>
                    {/*AQUI VAN LAS OPCIONES*/}

                    <div style={{ height: '6px' }} />
                    {/*AQUI VA LA PRIMERA*/}
                    <Row>
                        <Card
                            onClick={handleCardClick3}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={fast_retiro} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Retiro Rapido        S/100</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '8px' }} />
                    {/*AQUI VA LA SEGUNDA*/}
                    <Row>
                        <Card
                            onClick={handleCardOP2}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={fast_deposito} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Deposito rapido        Soles</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>


                </Col>
                <Col xs={1}></Col>
                <Col xs="auto">
                    <div className="d-flex align-items-center">
                        <Image src={last_operation} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6>Repetir mi ultima operacion</h6>
                    </div>
                    {/*AQUI VAN LAS OPCIONES*/}

                    <div style={{ height: '6px' }} />
                    {/*AQUI VA LA PRIMERA*/}
                    <Row>
                        <Card
                            onClick={handleCardClick3}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={retiro} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Retiro        US$20</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '8px' }} />
                    {/*AQUI VA LA SEGUNDA*/}
                    <Row>
                        <Card
                            onClick={handleCardClick3}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={otras} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Otras operaciones</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>

                </Col>
            </Row>


            {/*Aqui va el boton*/}
            <Row className="d-flex justify-content-center mt-4">
                <Col xs="auto">
                    <Button variant="danger" style={{ width: '150px', marginRight: '500px' }} onClick={handleCancel}>
                    CERRAR SESION
                    </Button>
                </Col>
            </Row>



                </Container>
            </Card>
        </Container>

        );
    }
    
    export default MenuATM;