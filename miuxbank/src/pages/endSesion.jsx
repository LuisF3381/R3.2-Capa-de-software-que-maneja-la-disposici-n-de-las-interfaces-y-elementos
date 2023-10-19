
import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from './components/generals/upVar';

// Imagenes
import check from '../images/check_azul.png'
import tarjeta from '../images/tarjeta.png'
import billetes from '../images/dinero.png'
import voucher from '../images/voucher.png'

function FinSesion() {




    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>

            <BankComponent/>

            {/*AQUI SE AGRADECE*/}
            <div style={{ height: '10px' }} />
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2>¡Gracias por preferir MiUX BANK!</h2>
                </Col>
            </Row>

            {/*AQUI SE PONE EL PRIMER PASO*/}
            <div style={{ height: '20px' }} />
            <Row className="justify-content-center align-items-center">
                {/* Checkmark Icon */}
                <Col xs={2}>
                    <Image src={check} style={{ width: '80px', height: 'auto' }} />
                </Col>
                {/* "Retira tu tarjeta" Text */}
                <Col xs={4}>
                    <h3>Retira tu tarjeta</h3>
                </Col>
                {/* Credit Card Image */}
                <Col xs="auto">
                    <Image src={tarjeta} style={{ width: '160px', height: 'auto' }} />
                </Col>
            </Row>

            {/*AQUI SE PONE EL SEGUNDO PASO*/}
            <div style={{ height: '20px' }} />
            <Row className="justify-content-center align-items-center">
                {/* Checkmark Icon */}
                <Col xs={2}>
                    <Image src={check} style={{ width: '80px', height: 'auto' }} />
                </Col>
                {/* "Retira tu tarjeta" Text */}
                <Col xs={4}>
                    <h3>Retira tu dinero</h3>
                </Col>
                {/* Credit Card Image */}
                <Col xs="auto">
                    <Image src={billetes} style={{ width: '160px', height: 'auto' }} />
                </Col>
            </Row>

            {/*AQUI SE PONE EL TERCERO PASO*/}
            <div style={{ height: '20px' }} />
            <Row className="justify-content-center align-items-center">
                {/* Checkmark Icon */}
                <Col xs={2}>
                    <Image src={check} style={{ width: '80px', height: 'auto' }} />
                </Col>
                {/* "Retira tu tarjeta" Text */}
                <Col xs={4}>
                    <h3>Retira tu voucher</h3>
                </Col>
                {/* Credit Card Image */}
                <Col xs="auto">
                    <Image src={voucher} style={{ width: '160px', height: '100px' }} />
                </Col>
            </Row>



            </Container>
            </Card>
        </Container>
        );
    }

export default FinSesion;

