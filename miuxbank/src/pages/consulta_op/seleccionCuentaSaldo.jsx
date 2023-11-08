
import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';
import { useNavigate } from 'react-router-dom';

import consulta from '../../images/operaciones/consulta_saldo.png'
import { useParams } from 'react-router-dom';

// Apis
import { listarCuentas } from '../../api/axios_api';
import { insertarOperacion } from '../../api/axios_api';

function SeleccionCuentaSaldo() {
    const { idUsuario, idUserModel } = useParams();
    const navigate = useNavigate();

    const [isPressed, setIsPressed] = useState(false);
    const [isPressedA, setIsPressedA] = useState(false);

    const [isPressedB1, setIsPressedB1] = useState(false);
    const [isPressedA1, setIsPressedA1] = useState(false);

    // Variables de la cuenta destino
    const [cuenta_destino, setCuenta_destino] = useState(false);
    const [constancia_cons, setConstancia_cons] = useState(false);


        // Para la primera opcion mas usada
    const handleCardClick1 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate('/retiro/seleccion-cuenta/2');
    };

    const handleCardClickB = () => {
        if (isPressed === false && isPressedA === false ) {
            setCuenta_destino(String(CC2));
            setIsPressed(!isPressed);
        }
        else{
            setCuenta_destino(String(CC2));
            setIsPressed(!isPressed); // Cambia el estado de presionado al hacer clic
            setIsPressedA(!isPressedA);
        }

    };

    const handleCardClickA = () => {
        if (isPressedA===false && isPressed===false){
            setCuenta_destino(String(CC1));
            setIsPressedA(!isPressedA);
        }else{
            setCuenta_destino(String(CC1));
            setIsPressedA(!isPressedA); // Cambia el estado de presionado al hacer clic
            setIsPressed(!isPressed);
        }
    };

    const handleCardClickA1 = () => {
        if (isPressedA1===false && isPressedB1===false){
            setConstancia_cons("voucher");
            setIsPressedA1(!isPressedA1);
        }else{
            setConstancia_cons("voucher");
            setIsPressedA1(!isPressedA1); // Cambia el estado de presionado al hacer clic
            setIsPressedB1(!isPressedB1);
        }
    };

    const handleCardClickB1 = () => {
        if (isPressedB1===false && isPressedA1===false){
            setConstancia_cons("pantalla");
            setIsPressedB1(!isPressedB1);
        }else{
            setConstancia_cons("pantalla");
            setIsPressedB1(!isPressedB1); // Cambia el estado de presionado al hacer clic
            setIsPressedA1(!isPressedA1);
        }
    };

    //AQUI DEBEMOS VER EL SALIR Y EL CONTINUAR
    const handleCancel = () => {
        // Lógica para el botón de continuar
        navigate(`/principal/${idUserModel}`);
    };
    

    const handleContinue = async() => {
        //Nos dirigimos a la pantalla de resumen
        try {
            let idOperacion;

            const fechaActual = new Date().toISOString();
            const operacionData = {
                tipoOperacion: 'Consulta',
                fechaOperacion: fechaActual,  // Ajusta el formato según tu necesidad
                constOperacion: constancia_cons,
                cuentaDestino: cuenta_destino, // Aqui ponemos las cuentas a consultar
                user_model_id: idUserModel,
              };
            
            const response = await insertarOperacion(operacionData);
            console.log("Response de insercion", response);
            idOperacion = response.idOperacion;
            
            if(constancia_cons === "voucher"){
                const response_ruta = `/fin-sesion/${idOperacion}`;
                navigate(`/consulta_intermedia`, { state: { response_ruta } });
            }else{
                const response_ruta = `/consulta/finalizado/${idUserModel}/${idOperacion}`;
                navigate(`/consulta_intermedia`, { state: { response_ruta } });
            }

            //navigate(`/retiro/finalizado/${idUserModel}/${idOperacion}`);
        } catch (error) {
            console.error('Error al insertar:', error);
        }
    };  


    // Variables cuentas
    const [nombreCuenta1, setNombreCuenta1] = useState('');
    const [CC1, setCC1] = useState('');
    const [tipoC1, setTipoC1] = useState('');
    const [tipoC1Name, setTipoC1Name] = useState('');

    const [nombreCuenta2, setNombreCuenta2] = useState('');
    const [CC2, setCC2] = useState('');
    const [tipoC2, setTipoC2] = useState('');
    const [tipoC2Name, setTipoC2Name] = useState('');

    useEffect(() => {
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
                setTipoC1Name("Soles");
            }
            if(response.tipoC1 === "D"){
                setTipoC1Name("Dolares");
            }

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
      }, []); 


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>
            
            <div style={{ height: '8px' }} />
            <Row>
                <Col md={7}>
                    <h3>Seleccion de cuenta</h3>
                    <h5 style={{ marginRight : '10px' }}>selecciona la cuenta a la que deseas consultar</h5>
                </Col>
                <Col md={5} className="d-flex align-items-center">
                </Col>
            </Row>
            <div style={{ height: '15px' }} />

            {/*AQUI SE PUEDEN SELECCIONAR LOS TIPOS DE MONEDA RETIRAR */}
            <Row>
                <Col xs={1}></Col>
                <Col xs={5} >
                    {/*PRIMERA OPCION*/}
                    <Row className="justify-content-center">
                        <Card
                            onClick={handleCardClickA}
                            style={{ width: '320px', height: '85px', cursor: 'pointer',backgroundColor: isPressedA ? '#EBFCFF' : 'white', // Cambia el color de fondo
                            borderColor: isPressedA ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                            boxShadow: isPressedA ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                            transition: 'box-shadow 0.3s ease', }}
                        >
                            <Card.Body className="m-0 p-2">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Row>
                                        <h6 className="m-0">{nombreCuenta1}</h6>
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
                </Col>
                
                <Col xs="auto"></Col>
                <Col xs={5}>
                {nombreCuenta2 !== "0" ? (
                    <>
                    {/*SEGUNDA OPCION*/}
                    <Row className="justify-content-center">
                    <Card
                            onClick={handleCardClickB}
                            style={{ width: '320px', height: '85px', cursor: 'pointer', backgroundColor: isPressed ? '#EBFCFF' : 'white', // Cambia el color de fondo
                            borderColor: isPressed ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                            boxShadow: isPressed ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                            transition: 'box-shadow 0.3s ease',}}
                        >
                            <Card.Body className="m-0 p-2">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Row>
                                        <h6 className="m-0">{nombreCuenta2}</h6>
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
                    </>
                ):(    
                    <p></p>
                )}
                    <div style={{ height: '30px' }} />
                </Col>
            </Row>

            {/*AQUI PUEDE SELECIONARSE LA CONSTANCIA DEL SALDO*/}
            <Row>
                <h5>Deseo consultar mi saldo:</h5>
            </Row>
            <div style={{ height: '15px' }} />
            <Row>
                <Col xs={1}></Col>
                <Col xs={7}>
                <Row>
                    <Col xs={5} >
                        {/*PRIMERA OPCION*/}
                        <Row className="justify-content-center">
                            <Card
                                onClick={handleCardClickA1}
                                style={{ width: '250px', height: '45px', cursor: 'pointer',backgroundColor: isPressedA1 ? '#EBFCFF' : 'white', // Cambia el color de fondo
                                borderColor: isPressedA1 ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                                boxShadow: isPressedA1 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                transition: 'box-shadow 0.3s ease', }}
                            >
                                <Card.Body className="m-0 p-2">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">EN VOUCHER</h7>
                                        </Row>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                                </Card>
                        </Row>
                        <div style={{ height: '30px' }} />
                    </Col>
                    
                    <Col xs="auto"></Col>
                    <Col xs={5}>
                        {/*SEGUNDA OPCION*/}
                        <Row className="justify-content-center">
                        <Card
                                onClick={handleCardClickB1}
                                style={{ width: '250px', height: '45px', cursor: 'pointer', backgroundColor: isPressedB1 ? '#EBFCFF' : 'white', // Cambia el color de fondo
                                borderColor: isPressedB1 ? '#0056b3' : 'lightgray', // Cambia el color del contorno
                                boxShadow: isPressedB1 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                transition: 'box-shadow 0.3s ease',}}
                            >
                                <Card.Body className="m-0 p-2">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">EN PANTALLA</h7>
                                        </Row>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                        </Card>
                        </Row>
                        <div style={{ height: '30px' }} />
                    </Col>
                </Row>

                </Col>
                <Col xs={4}>
                    <Image src={consulta} alt="Descripción" width={60} height={60} />
                </Col>
            </Row>


        <Row className="d-flex justify-content-center mt-4">
            <Col xs="auto">
                <Button variant="primary" style={{ width: '150px', margin: '0 100px', backgroundColor: '#B5ADAE' }} onClick={handleCancel}>
                REGRESAR
                </Button>
            </Col>
            <Col xs="auto">
                <Button variant="primary" style={{ width: '150px', margin: '0 100px' }} onClick={handleContinue}>
                CONTINUAR
                </Button>
            </Col>
        </Row>

            </Container>
            </Card>
        </Container>
        );
    }
    
    export default SeleccionCuentaSaldo;

