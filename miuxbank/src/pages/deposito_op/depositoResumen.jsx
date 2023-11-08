import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

// Componente del recibo
import CustomCardRecibo from '../components/generals/recibo';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

// Api para listar info
import { infoCuenta } from '../../api/axios_api';
import { insertarOperacion } from '../../api/axios_api';

function ResumenDeposito() {
    let { idUserModel, CCI, moneda } = useParams();

    const navigate = useNavigate();



    const handleContinue = async() => {
        // Lógica para el botón de continuar
        try {
            let idOperacion;

            const fechaActual = new Date().toISOString();
            const operacionData = {
                tipoOperacion: 'Deposito',
                montOperacion: 50,
                fechaOperacion: fechaActual,  // Ajusta el formato según tu necesidad
                constOperacion: '',
                cuentaDestino: CCI,
                moneda: moneda,
                nota: '',
                user_model_id: idUserModel,
              };

              const response = await insertarOperacion(operacionData);
              console.log("Response", response);
              idOperacion = response.idOperacion;
              
              //navigate(`/deposito/finalizado/${idUserModel}/${idOperacion}`);    
              const response_ruta = `/deposito/finalizado/${idUserModel}/${idOperacion}`;
              navigate(`/deposito2_intermedia`, { state: { response_ruta } });
              
        } catch (error) {
            console.error('Error al insertar la operacion:', error);
        }
        //navigate('/fin-sesion/');
    };

    const handleBack = () => {
        // Lógica para el botón de continuar
        navigate(`/deposito/ingreso-billetes/${idUserModel}/${CCI}/${moneda}`)
    };

    // VARIABLES PARA CUENTA
    const [nombreCuenta1, setNombreCuenta1] = useState('');
    const [CC1, setCC1] = useState('');
    const [tipoC1, setTipoC1] = useState('');
    const [tipoC1Name, setTipoC1Name] = useState('');


    // Para obtener la informacion de la cuenta
    useEffect(() => {
        infoCuenta(CCI)
        .then(response => {
            console.log("response", response);
            setNombreCuenta1(response.cuentaBancaria);
            setCC1(response.CCI);
            if( moneda === "S"){
                setTipoC1("S/");
            }else{
                setTipoC1("US$");
            }
        })
        .catch(error => {
          // Manejo de errores, por ejemplo, imprimir en la consola
          console.error('Error al obtener lista de cuentas:', error);
        });
    
    }, [navigate]);  //

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
                                <h5 style={{ textAlign: 'right'}}>{nombreCuenta1}</h5>
                                <h5 style={{ textAlign: 'right'}}>{CC1}</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={7}>
                                <h5 className="font-weight-bold">Monto que se depositara:</h5>
                            </Col>
                            <Col xs={5}>
                                <h4 style={{ textAlign: 'right'}}>{tipoC1}50</h4>
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
                        <Button variant="primary" style={{ width: '250px', backgroundColor: '#7CCDDD', color: 'black' }} onClick={handleBack}>
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