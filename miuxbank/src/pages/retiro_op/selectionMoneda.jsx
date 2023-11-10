import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

import advertencia from '../../images/advertencia.png'
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import sol_icon from '../../images/sol_icon.png'
import dolar_icon from '../../images/dolar_icon.png'
import { useParams } from 'react-router-dom';

import { get_user_model } from '../../api/axios_api';

function SeleccionMoneda() {
    let { idUserModel, CCI, } = useParams();
    const navigate = useNavigate();

    // Para el traductor de texto
    const { t, i18n } = useTranslation();

    // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/retiro/seleccion-monto/${idUserModel}/${CCI}/S`);
      };


      const handleCardClick2 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/retiro/seleccion-monto/${idUserModel}/${CCI}/D`);
      };

    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
        // Lógica para el botón de cancelar
        //navigate(`/retiro/seleccion-cuenta/${idUserModel}`);
        navigate(-1);
    };


    // Para el tamaño de los textos
    const [tamtexto, setTamtexto] = useState('');

    useEffect(() => {
        // Obtenemos el tamaño de letra
        get_user_model(idUserModel)
        .then(response_user_model => {
            console.log("aaa, ",response_user_model);
            if(response_user_model.tamFuente === null){
                setTamtexto(13);
            }else{
                //setTamtexto(response_user_model.tamFuente);
                setTamtexto(response_user_model.tamFuente);

            }

        })
        .catch(error => {
          // Manejo de errores, por ejemplo, imprimir en la consola
          console.error('Error al obtener el userModel:', error);
        });

    }, []);  //
        
    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>

            <div style={{ height: '8px' }} />

            <Row className="align-items-center justify-content-between no-gutters">
                <Col md={7}>
                    <h3 style={{ fontSize: tamtexto*1.75 }}>Retiro de efectivo</h3>
                    <h5 style={{ fontSize: tamtexto*1.5 }}>selecciona la moneda a retirar</h5>
                </Col>

                <Col md={5} className="d-flex align-items-center">
                        <Card
                            className="d-flex align-items-center"
                            style={{ width: '250px', height: '75px', backgroundColor: '#FFF6A7',borderRadius: '0', }}
                        >                        
                            <Card.Body className="m-0 p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={advertencia} alt="Descripción" width={50} height={50} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h9 style={{ fontSize: tamtexto*1.11 }}>Tipo de cambio</h9>
                                        </Row>
                                        <Row>
                                            <h11 style={{ fontSize: tamtexto*1.11 }}>Dolar a sol: S/3.72</h11>
                                        </Row>
                                        <Row>
                                            <h11 style={{ fontSize: tamtexto*1.11 }}>Sol a dolar: US$ 0.27</h11>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
            <div style={{ height: '50px' }} />

            {/*AQUI SE PUEDEN SELECCIONAR LOS TIPOS DE MONEDA RETIRAR */}
            <Row className="justify-content-center">
                <Col xs={4} >
                    {/*PRIMERA CUENTA*/}
                    <Row className="justify-content-center">
                        <Card onClick={handleCardClick1} className="text-center" style={{ width: '230px', height: '180px', cursor: 'pointer' }}>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                            <Card.Img variant="top" src={sol_icon} style={{ maxWidth: '42%', marginBottom: '10px' }} />
                            <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: tamtexto*1.15  }}>Retirar soles</p>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '30px' }} />
                </Col>
                
                <Col xs="auto"></Col>
                <Col xs={4}>
                    {/*PRIMERA CUENTA*/}
                    <Row className="justify-content-center">
                        <Card onClick={handleCardClick2} className="text-center" style={{ width: '230px', height: '180px', cursor: 'pointer' }}>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                            <Card.Img variant="top" src={dolar_icon} style={{ maxWidth: '42%', marginBottom: '10px' }} />
                            <p style={{ fontWeight: 'bold', marginBottom: '10px',  fontSize: tamtexto*1.15  }}>Retirar dolares</p>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '30px' }} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center mt-4">
                <Col xs="auto">
                <Button variant="primary" style={{ width: '150px', marginRight: '500px', backgroundColor: '#B5ADAE'  }} onClick={handleCancel}>
                    REGRESAR
                    </Button>
                </Col>
            </Row>


            </Container>
            </Card>
        </Container>
        );
    }
    
    export default SeleccionMoneda;