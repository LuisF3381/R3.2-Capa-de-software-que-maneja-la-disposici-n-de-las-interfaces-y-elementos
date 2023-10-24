import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';
import CustomAlert from '../components/generals/alertaVerde';
import CustomCardRecibo from '../components/generals/recibo';
import { useNavigate } from 'react-router-dom';


function FinDeposito() {
    
    const navigate = useNavigate();



    const handleContinue = () => {
        // Lógica para el botón de continuar
        navigate('/fin-sesion/');
    };

    const handleCheckboxChange = () => {
        console.log("Checkbox changed");
    };


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>
            <div style={{ height: '20px' }} />
            <Row className="align-items-center justify-content-center">
                <CustomAlert
                        variant="success"
                        width="500px"
                        fontSize="20px"
                        centered
                    >
                        ¡Tu transaccion se ha realizado con exito!
                    </CustomAlert>
            </Row>
            <div style={{ height: '20px' }} />
            {/*RECIBO DEL RETIRO REALIZADO*/}
            <Row className="align-items-center justify-content-center">
                <CustomCardRecibo width="500px" height="220px" bordered={false} color="#FFF6A7">
                    <Row className="justify-content-center">
                        <h5 className="text-center font-weight-bold">Cuenta de ahorro 324</h5>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <h5 className="font-weight-bold">Fecha y hora:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ textAlign: 'right'}}>20/08/2023</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <h5 className="font-weight-bold">Nro de tarjeta:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ textAlign: 'right'}}>5118 4205 0615 1024</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <h5 className="font-weight-bold">Nro de cuenta:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ textAlign: 'right'}}>325-7949240</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <h5 className="font-weight-bold">Monto depositado:</h5>
                        </Col>
                        <Col xs={6}>
                            <h5 style={{ textAlign: 'right'}}>S/50.00</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <h5 className="font-weight-bold">Saldo disponible:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ textAlign: 'right'}}>S/1149.80</h5>
                        </Col>
                    </Row>
                </CustomCardRecibo>
            </Row>

            <div style={{ height: '30px' }} />
            <Row className="justify-content-center align-items-center">
                <Col xs="auto">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            label="IMPRIMIR VOUCHER"
                            onChange={handleCheckboxChange}
                            defaultChecked={true}
                        />
                    </Form.Group>
                </Col>
                <Col xs={4}></Col>
                <Col xs="auto">
                    <Button variant="primary" style={{ width: '180px', backgroundColor: '#47818D' }} onClick={handleContinue}>
                       SALIR
                    </Button>
                </Col>
            </Row>


            </Container>
            </Card>
        </Container>
        );
    }

export default FinDeposito;