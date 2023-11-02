import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

// Componente del recibo
import CustomCardRecibo from '../components/generals/recibo';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Importar apis
import { listarOperacion } from '../../api/axios_api';
import { infoCuenta } from '../../api/axios_api';
import { getIdsuarioByIdUserModel } from '../../api/axios_api';
import { obtenerTarjeta } from '../../api/axios_api';

function FinConsulta() {
    let { idUserModel, idTransaccion, } = useParams();

    const navigate = useNavigate();

    const handleContinue = () => {
        // Lógica para el botón de continuar
        navigate(`/fin-sesion/${idTransaccion}`);
    };

    const [cci, setcci] = useState('');
    const [fecha_transaccion, setFecha_transaccion] = useState('');

    // Informacion de la cuenta
    const [terminologia2, setTerminologia2] = useState('');
    const [nombre_cuenta, setNombre_cuenta] = useState('');
    const [saldo, setSaldo] = useState('');
    const [n_tarjeta, setN_tarjeta] = useState('');

    useEffect(() => {
        listarOperacion(idTransaccion)
        .then(response => {
            console.log("Response", response);
            setcci(response.cuentaDestino);
            // Seteamos la fecha de la transaccion
            const fecha = new Date(response.fechaOperacion);
            const formatoDeseado = `${fecha.getDate().toString().padStart(2, '0')}/${(fecha.getMonth() + 1).toString().padStart(2, '0')}/${fecha.getFullYear()} ${fecha.getHours().toString().padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}`;
            setFecha_transaccion(formatoDeseado);


            infoCuenta(response.cuentaDestino)
            .then(response2 => {
                console.log("response2", response2);
                setNombre_cuenta(response2.cuentaBancaria);
                const numeroFormateado = parseFloat(response2.saldoCuenta).toFixed(2);
                setSaldo(numeroFormateado);

                if(response2.tipoCuenta === "S"){
                    setTerminologia2("S/")
                }else{
                    setTerminologia2("US$")   
                }

                // Ahora obtenemos el id del usuario 
            // Ahora obtenemos el id del usuario 
            getIdsuarioByIdUserModel(response.user_model_id)
            .then(response3 => {
                console.log("response3", response3.idUsuario);

                //Finalmente obtenemos la informacion de la tarjeta
                obtenerTarjeta(response3.idUsuario)
                .then(response4 => {
                    console.log("response4", response4);
                    setN_tarjeta(response4.tarjeta);
                })
                .catch(error => {
                // Manejo de errores, por ejemplo, imprimir en la consola
                console.error('Error al obtener informacion de la cuenta:', error);
                });

            })
            .catch(error => {
            // Manejo de errores, por ejemplo, imprimir en la consola
            console.error('Error al obtener informacion de la cuenta:', error);
            });

            })
            .catch(error => {
            // Manejo de errores, por ejemplo, imprimir en la consola
            console.error('Error al obtener informacion de la cuenta:', error);
            });
        })
        .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al listar la operacion:', error);
        });

    }, []);  //

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                <div style={{ height: '20px' }} />
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h3>Detalle de la cuenta</h3>
                    </Col>
                </Row>
                
                <div style={{ height: '20px' }} />
                {/*RECIBO DE CONSULTA REALIZADA*/}
                <Row className="align-items-center justify-content-center">
                    <CustomCardRecibo width="500px" height="190px" bordered={false} color="#FFF6A7">
                        <Row className="justify-content-center">
                            <h5 className="text-center font-weight-bold">{nombre_cuenta}</h5>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <h5 className="font-weight-bold">Fecha y hora:</h5>
                            </Col>
                            <Col xs={7}>
                                <h5 style={{ textAlign: 'right'}}>{fecha_transaccion}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <h5 className="font-weight-bold">Nro de tarjeta:</h5>
                            </Col>
                            <Col xs={7}>
                                <h5 style={{ textAlign: 'right'}}>{n_tarjeta}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <h5 className="font-weight-bold">Nro de cuenta:</h5>
                            </Col>
                            <Col xs={7}>
                                <h5 style={{ textAlign: 'right'}}>{cci}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <h5 className="font-weight-bold">Saldo disponible:</h5>
                            </Col>
                            <Col xs={7}>
                                <h5 style={{ textAlign: 'right'}}>{terminologia2}{saldo}</h5>
                            </Col>
                        </Row>
                    </CustomCardRecibo>
                </Row>
                <div style={{ height: '30px' }} />
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto">

                    </Col>
                    <Col xs={6}></Col>
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

export default FinConsulta;
