import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import insertar_tarjeta from '../images/imagenes_welcome/insertar_tarjeta.png';
import retiro from '../images/imagenes_welcome/retiro.png';
import consulta from '../images/imagenes_welcome/consulta.png';
import deposito from '../images/imagenes_welcome/deposito.png';
import logo from '../images/imagenes_welcome/miux_logo.png';
import { useNavigate } from 'react-router-dom';


function WelcomeScreen() {
    // Navigate para realizar la redireccion
    const navigate = useNavigate();
    const billetes = ["S/20", "S/50", "S/100", "US$20", "US$50"];

    //Aqui se hace el manejo del MODAL 
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      const handleContinue = () => {
        // Aquí puedes realizar acciones con la opción seleccionada
        console.log('Opción seleccionada:', selectedOption);


        //Aqui hacemos la redireccion a la pantalla de bienvenida (por ahora deberia verificarse si ya lo quito o no)
        //En caso sea haya dado no volver a mostrar se haria la redireccion a la pantalla de bienvenida segun su perfil


        //En caso sea haya quitado la pantalla de bienvenida se iria al menu principal
        //navigate('/bienvenido/2');
        navigate('/login/2');

        // Cierra el modal
        handleCloseModal();
      };


  return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-5">
                <Container>
                <Row className="align-items-center">
                    <Col xs={1}>
                        <Image src={logo} rounded style={{ width: '60px', height: 'auto' }} />
                    </Col>
                    <Col>
                        <h1 style={{ margin: 20, fontWeight: 'bold', fontSize: '24px' }}>MiUX BANK</h1>
                    </Col>
                </Row>
                <div style={{ height: "20px" }} />
                <Row>
                    <h3>Hola, ¡Bienvenido a MiUX BANK!</h3>
                </Row>
                    <Row>
                        <Col md={8}>
                            <h4 className="mt-4">Operaciones disponibles:</h4>
                            <Row className="mt-3">
                                {/*Aqui se listan las opciones del cajero */}
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row className="align-items-center">
                                            <Col xs={1}>
                                                <Image src={retiro} rounded style={{ width: '55px', height: 'auto' }} />
                                            </Col>
                                            <Col>
                                                <h7 style={{ margin: 30, fontSize: '20px' }}>Retiro de efectivo</h7>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row className="align-items-center">
                                            <Col xs={1}>
                                                <Image src={consulta} rounded style={{ width: '40px', height: 'auto' }} />
                                            </Col>
                                            <Col>
                                                <h7 style={{ margin: 30, fontSize: '20px' }}>Consulta de saldo</h7>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row className="align-items-center">
                                            <Col xs={1} >
                                                <Image src={deposito} rounded style={{ width: '40px', height: 'auto' }} />
                                            </Col>
                                            <Col>
                                                <h7 style={{ margin: 30, fontSize: '20px' }}>Deposito de efectivo</h7>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Row>
                        </Col>

                        <Col>
                            <h4>Inserta tu tarjeta</h4>
                            <img src={insertar_tarjeta} alt="Tarjeta" style={{ maxWidth: '80%', marginBottom: '0px', cursor: 'pointer' }} onClick={handleShowModal}/>
                        </Col>
                    </Row>
                    <div style={{ height: "20px" }} />

                    <Row  className="align-items-center" style={{ background: '#e6f7ff', padding: '10px 20px', flex: 1, height: '80px' }}>
                        <Col>
                            <h5>Billetes Disponibles:</h5>
                        </Col>
                        <Col>
                            <h5>S/20 S/50 S/100 US$20 US$50</h5>
                        </Col>
                    </Row>
                </Container>
            </Card>
            {/*AQUI VA EL TEMA DEL MODAL*/}
                    <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Selecciona una opción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group>
                    <Form.Label>Selecciona una opción:</Form.Label>
                    <Form.Control as="select" onChange={handleOptionChange} value={selectedOption}>
                    <option value="">Selecciona la cuenta</option>
                    <option value="Cancelar">Cuenta 456</option>
                    <option value="Continuar">Cuenta 567</option>
                    </Form.Control>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleContinue} disabled={!selectedOption}>
                    Continuar
                </Button>
                </Modal.Footer>
            </Modal>

        </Container>
  );
}

export default WelcomeScreen;
