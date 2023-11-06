
import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from './components/generals/upVar';

// Imagenes
import check from '../images/check_azul.png'
import tarjeta from '../images/tarjeta.png'
import billetes from '../images/dinero.png'
import voucher from '../images/voucher.png'

import { listarOperacion } from '../api/axios_api';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FinSesion() {
    let { idTransaccion, } = useParams();
    const navigate = useNavigate();

    // Variables para las animaciones
    const [step1Visible, setStep1Visible] = useState(false);
    const [step2Visible, setStep2Visible] = useState(false);
    const [step3Visible, setStep3Visible] = useState(false);

    let operacion;
    let constancia;

    // Funcion para las animaciones
    const iniciarAnimaciones = async () => {

            await new Promise(resolve => {
                // Inicia la primera animación
                setStep1Visible(true);
                setTimeout(() => {
                  setStep1Visible(false);
                  resolve();
                }, 4500); // Por ejemplo, 3 segundos después de la primera animación
              });
        

        if(operacion === "Retiro"){
            await new Promise(resolve => {
            // Inicia la segunda animación
            setStep2Visible(true);
            setTimeout(() => {
                setStep2Visible(false);
                resolve();
            }, 4500); // Por ejemplo, 3 segundos después de la segunda animación
            });
        }
        
        if(constancia === "voucher"){
            await new Promise(resolve => {
            // Inicia la tercera animación
            setStep3Visible(true);
            setTimeout(() => {
                setStep3Visible(false);
                resolve();
            }, 4500); // Por ejemplo, 3 segundos después de la tercera animación
            });
        }
        // Todas las animaciones han terminado, ejecuta la navegación
        navigate('/');
      };


    useEffect(() => {        
        listarOperacion(idTransaccion)
        .then(response4 => {
            console.log("response4", response4);

            // Seteamos la operacion (solo si es retiro se indicara llevate tu dinero)
            operacion = response4.tipoOperacion;

            // Seteamos la constancia de la operacion
            constancia = response4.constOperacion;
        })
        .catch(error => {
        // Manejo de errores, por ejemplo, imprimir en la consola
        console.error('Error al obtener informacion de la cuenta:', error);
        });

        iniciarAnimaciones();
    }, []);  //

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

            <div style={{ height: '110px' }} />

            {/*AQUI SE PONE EL PRIMER PASO*/}
            {step1Visible && (
                <>
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
                </>
            )}

            {/*AQUI SE PONE EL SEGUNDO PASO*/}
            {step2Visible  && (
                <>
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
                </>
            )}


            {/*AQUI SE PONE EL TERCERO PASO*/}
            {step3Visible && (
                <>
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
                </>
            )}


            </Container>
            </Card>
        </Container>
        );
    }

export default FinSesion;

