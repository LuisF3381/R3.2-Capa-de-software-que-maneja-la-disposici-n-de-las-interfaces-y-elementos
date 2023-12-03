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

// APIS
import { listarCuentas } from '../../api/axios_api';
import { get_user_model } from '../../api/axios_api';



function SeleccionCuenta() {
    const { idUsuario, idUserModel } = useParams();
    const navigate = useNavigate();

    console.log("idUsuario",idUsuario);
    console.log("idUserModel",idUserModel);

      // Para el traductor de texto
    const { t, i18n } = useTranslation();

    var idCuenta = 2;

    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
     const handleCancel = () => {

        //navigate(`/principal/${idUserModel}`);
        navigate(-1);
    };

    
    // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Aqui se pone la primera cuenta
        var CCI_AUX = CC1;
        navigate(`/retiro/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
    };

    const handleCardClick2 = () => {
        // Aqui se pone la segunda cuenta
        var CCI_AUX = CC2;
        navigate(`/retiro/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
    };

    // VARIABLES PARA CUENTA
    const [nombreCuenta1, setNombreCuenta1] = useState('');
    const [CC1, setCC1] = useState('');
    const [tipoC1, setTipoC1] = useState('');
    const [tipoC1Name, setTipoC1Name] = useState('');

    const [nombreCuenta2, setNombreCuenta2] = useState('');
    const [CC2, setCC2] = useState('');
    const [tipoC2, setTipoC2] = useState('');
    const [tipoC2Name, setTipoC2Name] = useState('');

    // Para el tamaño de los textos
    const [tamtexto, setTamtexto] = useState('');



    useEffect(() => {
        //i18n.changeLanguage(nuevoIdioma);
        setTamtexto(13);
        // Llamamos al userModel
        get_user_model(idUserModel)
        .then(response_user_model => {
            //console.log("Console log:", response_user_model.idiomaPreferido);
            i18n.changeLanguage(response_user_model.idiomaPreferido);

        })
        .catch(error => {
          // Manejo de errores, por ejemplo, imprimir en la consola
          console.error('Error al obtener el userModel:', error);
        });


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

        // Llama a la función que realiza la solicitud de la API
        listarCuentas(idUsuario)
          .then(response => {
            // Actualiza el estado con los datos del perfil
            console.log("response", response);

            // Guardamos la primera cuenta bancaria
            setNombreCuenta1(response.cuentaBancaria1);
            setCC1(response.CCI1);
            setTipoC1(response.tipoC1);

            if(response.tipoC1 === "S"){
                setTipoC1Name("Soles - Saldo: S/****");
            }
            if(response.tipoC1 === "D"){
                setTipoC1Name("Dolares - Saldo: US$ ****");
            }
        
            // Guardamos la segunda cuenta bancaria
            setNombreCuenta2(response.cuentaBancaria2);
            setCC2(response.CCI2);
            setTipoC2(response.tipoC2);

            if(response.tipoC2 === "S"){
                setTipoC2Name("Soles - Saldo: S/****");
            }
            if(response.tipoC2 === "D"){
                setTipoC2Name("Dolares - Saldo: US$ ****");
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
                    <h3 style={{ fontSize: tamtexto*1.75 }}>{t('seleccion_cuentas_1')}</h3>
                    <h5 style={{ fontSize: tamtexto*1.5 }}>{t('seleccion_cuentas_2')}</h5>
                </Col>

                <Col md={5} className="d-flex align-items-center">
                <Card
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '75px', backgroundColor: '#FFF6A7',borderRadius: '0', }}
                        >                        
                            <Card.Body className="m-0 p-0">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={fajo_billetes} alt="Descripción" width={55} height={50} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h9  style={{ fontSize: tamtexto*1.10 }}>Billetes Disponibles</h9>
                                        </Row>
                                        <Row>
                                            <h11  style={{ fontSize: tamtexto*1.05 }}>Soles: S/20 S/50 S/100 </h11>
                                        </Row>
                                        <Row>
                                            <h11 style={{ fontSize: tamtexto*1.05 }}>Dolares: US$20 US$50</h11>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
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
                                    <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{nombreCuenta1}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{CC1}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>Moneda: {tipoC1Name}</h7>
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
                                    <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{nombreCuenta2}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{CC2}</h7>
                                </Row>
                                <Row>
                                    <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>Moneda: {tipoC2Name}</h7>
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
                    {t('regresar')}
                    </Button>
                </Col>
            </Row>

            </Container>
            </Card>
        </Container>
        );
    }
    
    export default SeleccionCuenta;