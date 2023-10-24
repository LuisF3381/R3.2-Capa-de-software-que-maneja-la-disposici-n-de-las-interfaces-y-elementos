import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

// Componente del recibo
import CustomCardRecibo from '../components/generals/recibo';

import { useNavigate } from 'react-router-dom';


function ResumenDeposito() {

    const navigate = useNavigate();



    const handleContinue = () => {
        // Lógica para el botón de continuar
        navigate('/fin-sesion/');
    };


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                <div style={{ height: '20px' }} />
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h3>Resumen de la operación</h3>
                    </Col>
                </Row>

                <div style={{ height: '20px' }} />

                <Row className="align-items-center justify-content-center">
                    <CustomCardRecibo width="500px" height="190px" bordered={false} color="#FFF6A7">
                        <Row>
                            <Col xs={5}>
                                <h5 className="font-weight-bold">Cuenta destino:</h5>
                            </Col>
                            <Col xs={7}>
                                <h5 style={{ textAlign: 'right'}}>Cuenta de ahorro 324</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={5}>
                                <h5 className="font-weight-bold">Monto que se depositara:</h5>
                            </Col>
                            <Col xs={7}>
                                <h4 style={{ textAlign: 'right'}}>S/50</h4>
                            </Col>
                        </Row>

                        <Row>
                            <h5>Se ha ingresado:</h5>
                        </Row>
                        <Row>
                            <h5>1 billete de 50 soles</h5>
                        </Row>

                    </CustomCardRecibo>
                </Row>

            <div style={{ height: '30px' }} />
            <Row className="justify-content-center align-items-center">
                <Col xs="auto">
                    <Row>
                        <Button variant="primary" style={{ width: '250px', backgroundColor: '#7CCDDD', color: 'black' }} onClick={handleContinue}>
                            INGRESAR MAS BILLETES
                        </Button>
                    </Row>
                    <div style={{ height: '20px' }} />
                    <Row>
                        <Button variant="primary" style={{ width: '250px', backgroundColor: '#FA5362', color: 'black' }} onClick={handleContinue}>
                            CANCELAR
                        </Button>
                    </Row>

                </Col>
                <Col xs={4}></Col>
                <Col xs="auto">
                    <Button variant="primary" style={{ width: '180px', backgroundColor: '#84DD7C', color: 'black' }} onClick={handleContinue}>
                        CONFIRMAR
                    </Button>
                </Col>
            </Row>


                </Container>
            </Card>
        </Container>
        );
    }
    
    export default ResumenDeposito;