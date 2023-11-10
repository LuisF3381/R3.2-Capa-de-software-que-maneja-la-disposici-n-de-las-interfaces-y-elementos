
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

import fajo_billetes from '../../images/fajo_billetes.png'
import sol_icon from '../../images/sol_icon.png'
import dolar_icon from '../../images/dolar_icon.png'

// Para traducir el texto
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { listarCuentas } from '../../api/axios_api';


function SeleccionCuentaDeposito() {
    const { idUserModel, idUsuario } = useParams();
    const navigate = useNavigate();
    var idCuenta = 2;




    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
     const handleCancel = () => {

        //navigate(`/principal/${idUserModel}`);
        navigate(-1);
    };
    
        
        // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
         // Puedes realizar las acciones necesarias aquí
        var CCI_AUX = CC1;
        navigate(`/deposito/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
    };

    const handleCardClick2 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
         // Puedes realizar las acciones necesarias aquí
         var CCI_AUX = CC2;
        navigate(`/deposito/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
    };

    // VARIABLES PARA CUENTA
    const [nombreCuenta1, setNombreCuenta1] = useState('');
    const [CC1, setCC1] = useState('');
    const [tipoC1, setTipoC1] = useState('');
    const [tipoC1Name, setTipoC1Name] = useState('');

    // Guardamos la segunda cuenta bancaria
    const [nombreCuenta2, setNombreCuenta2] = useState('');
    const [CC2, setCC2] = useState('');
    const [tipoC2, setTipoC2] = useState('');
    const [tipoC2Name, setTipoC2Name] = useState('');
    



    useEffect(() => {
        // Listamos las cuentas del usuario
        listarCuentas(idUsuario)
        .then(response => {

            console.log("response", response);
        
            // Guardamos la primera cuenta bancaria
            setNombreCuenta1(response.cuentaBancaria1);
            setCC1(response.CCI1);
            setTipoC1(response.tipoC1);

            if(response.tipoC1 === "S"){
                setTipoC1Name("Soles");
            }
            if(response.tipoC1 === "D"){
                setTipoC1Name("Dolares");
            }

            // Guardamos la segunda cuenta bancaria
            setNombreCuenta2(response.cuentaBancaria2);
            setCC2(response.CCI2);
            setTipoC2(response.tipoC2);

            if(response.tipoC2 === "S"){
                setTipoC2Name("Soles");
            }
            if(response.tipoC2 === "D"){
                setTipoC2Name("Dolares");
            }

        })
        .catch(error => {
          // Manejo de errores, por ejemplo, imprimir en la consola
          console.error('Error al obtener lista de cuentas:', error);
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
                    <h3>Selecciona una de tus cuentas</h3>
                    <h5>y comienza a depositar</h5>
                </Col>

                <Col md={5} className="d-flex align-items-center">
                </Col>
            </Row>

            <div style={{ height: '40px' }} />
            {/*AQUI VAN LAS CUENTAS  QUE SE PUEDEN SELECCIONAR*/}
            <Row className="justify-content-center">
                <Col xs="auto"></Col>
                <Col xs={7} >
                    {/*PRIMERA CUENTA*/}
                    <Row className="justify-content-center">
                        <Card
                            onClick={handleCardClick1}
                            style={{ width: '520px', height: '80px', cursor: 'pointer' }}
                        >
                            <Card.Body className="m-0 p-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    {tipoC1 === "S" ? (
                                        <Image src={sol_icon} alt="Descripción" width={40} height={40} />
                                    ): tipoC1 === "D" ?(
                                        <Image src={dolar_icon} alt="Descripción" width={40} height={40} />
                                    ):(    
                                            <p></p>
                                    )}
                                </Col>
                                <Col xs="auto">
                                <Row>
                                    <h7 className="m-0">{nombreCuenta1}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">{CC1}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">Moneda: {tipoC1Name}</h7>
                                </Row>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '30px' }} />
                    {/*SEGUNDA CUENTA*/}
                    <Row className="justify-content-center">
                        <Card
                            onClick={handleCardClick2}
                            style={{ width: '520px', height: '80px', cursor: 'pointer' }}
                        >
                            <Card.Body className="m-0 p-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                {tipoC2 === "S" ? (
                                        <Image src={sol_icon} alt="Descripción" width={40} height={40} />
                                    ): tipoC2 === "D" ?(
                                        <Image src={dolar_icon} alt="Descripción" width={40} height={40} />
                                    ):(    
                                        <p></p>
                                    )}                                
                                </Col>
                                <Col xs="auto">
                                <Row>
                                    <h7 className="m-0">{nombreCuenta2}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">{CC2}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0">Moneda: {tipoC2Name}</h7>
                                </Row>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Row>

                </Col>
                <Col xs="auto"></Col>
            </Row>


            <div style={{ height: '15px' }} />
            {/*Aqui va el boton*/}
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
    
    export default SeleccionCuentaDeposito;