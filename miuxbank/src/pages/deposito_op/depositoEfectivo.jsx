import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

import depositar_billetes from '../../images/deposito_billetes.png'


function DepositoEfectivo() {



    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>

            <div style={{ height: '8px' }} />
            <Row>
                <Col md={7}>
                    <h3>Ingrese los billetes en la bandeja</h3>
                    <h5 style={{ marginRight : '10px' }}>Depositando SOLES</h5>
                    <h5 style={{ marginRight : '10px' }}>Cuenta de destino: Cuenta de ahorro - 324</h5>

                </Col>

                <Col md={5} className="d-flex align-items-center">
                </Col>
            </Row>

            {/*AQUI VAN LAS CUENTAS  QUE SE PUEDEN SELECCIONAR*/}
            <div style={{ height: '40px' }} />
            <Row className="justify-content-center">
                <Col xs="auto"></Col>
                <Col xs={4} >
                    {/*IMAGEN*/}
                    <Row className="justify-content-center">
                        <Image src={depositar_billetes} alt="Descripción" width={100} height={184} />
                    </Row>
                    <div style={{ height: '15px' }} />
                    <Row className="justify-content-center">
                        <h5 className="text-center">La bandeja se cerrará en 40 segundos</h5>
                    </Row>


                    <div style={{ height: '30px' }} />
                </Col>
                <Col xs="auto"></Col>
            </Row>

            </Container>
            </Card>
        </Container>
        );
    }
    
    export default DepositoEfectivo;

