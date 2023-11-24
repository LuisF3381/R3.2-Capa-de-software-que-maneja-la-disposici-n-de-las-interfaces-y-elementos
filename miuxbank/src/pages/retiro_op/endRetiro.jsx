
import React, { useState, useEffect } from 'react';
import { Container, Alert, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';
import CustomAlert from '../components/generals/alertaVerde';
import CustomCardRecibo from '../components/generals/recibo';
import { useNavigate } from 'react-router-dom';

// APIS

import { listarOperacion } from '../../api/axios_api';
import { infoCuenta } from '../../api/axios_api';
import { getIdsuarioByIdUserModel } from '../../api/axios_api';
import { obtenerTarjeta } from '../../api/axios_api';
import { constanciaOperacion } from '../../api/axios_api';
import { getOperationModel } from '../../api/axios_api';

import { actualizar_user_model } from '../../api/axios_api';


import { useParams } from 'react-router-dom';
import { get_user_model } from '../../api/axios_api';

function FinRetiro() {
    let { idUserModel, idTransaccion, idOperation} = useParams();
    const navigate = useNavigate();

    // Variables sobre la operacion realizada
    const [transaccion, setTransaccion] = useState('');
    const [terminologia, setTerminologia] = useState('');
    const [terminologia2, setTerminologia2] = useState('');
    const [fecha_transaccion, setFecha_transaccion] = useState('');
    const [monto_operacion, setMonto_operacion] = useState('');

    // Informacion de la cuenta
    const [nombre_cuenta, setNombre_cuenta] = useState('');
    const [cci, setcci] = useState('');
    const [saldo, setSaldo] = useState('');
    const [n_tarjeta, setN_tarjeta] = useState('');

    // Para el checbox 
    const [selectedOption, setSelectedOption] = useState(false);



    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
            // Lógica para el botón de cancelar
    };
    
    const handleContinue = async() => {   

        // Actualizamos el valor segun el valor del selected option
        try {
            let constancia;
            if( selectedOption === true)
                constancia = "voucher";
            else
                constancia = "pantalla";

            const response = await constanciaOperacion(idTransaccion, constancia);
            console.log("constancia", response);

            // Aqui actualizamos el user model
            navigate(`/fin-sesion/${idTransaccion}/${idUserModel}`);
        } catch (error) {
            console.error('Error al obtener el perfil actualizado:', error);
        }
    };

    const handleCheckboxChange = () => {
        console.log("Checkbox changed");
        setSelectedOption(!selectedOption);
    };


    // Para el tema de cargar el operational model
    const cargaOperationModel = async(idOperation) => {
        const response = await getOperationModel(idOperation);
        console.log("Response operational", response);

        // Vemos la preferencia de la constancia 
        if(response.constOperacion === "pantalla"){
            setSelectedOption(false);
        }else{
            setSelectedOption(true);
        }

    };

    // Para el tamaño de los textos
    const [tamtexto, setTamtexto] = useState('');

   // Use Effect para traer la informacion de la operacion
   useEffect(() => {

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



    // Para el idOperation
    console.log("idOperation", idOperation);

    if( idOperation !== undefined){
        cargaOperationModel(idOperation);
    }

    listarOperacion(idTransaccion)
    .then(response => {
      console.log("response", response);
      setTransaccion(response.tipoOperacion);
      if(response.moneda === "S"){
        setTerminologia("S/")
      }else{
        setTerminologia("US$")   
      }

      // Seteamos la fecha de la transaccion
      const fecha = new Date(response.fechaOperacion);
      const formatoDeseado = `${fecha.getDate().toString().padStart(2, '0')}/${(fecha.getMonth() + 1).toString().padStart(2, '0')}/${fecha.getFullYear()} ${fecha.getHours().toString().padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}`;
      setFecha_transaccion(formatoDeseado);

      // Seteamos el monto de la transaccion
      setMonto_operacion(response.montOperacion);

      // Ahora obtenemos la informacion de la cuenta
      infoCuenta(response.cuentaDestino)
      .then(response2 => {
        console.log("response2", response2);
        setNombre_cuenta(response2.cuentaBancaria);
        setcci(response2.CCI);
        const numeroFormateado = parseFloat(response2.saldoCuenta).toFixed(2);
        setSaldo(numeroFormateado);

        if(response2.tipoCuenta === "S"){
            setTerminologia2("S/")
        }else{
            setTerminologia2("US$")   
        }
        
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
      console.error('Error al obtener lista de cuentas:', error);
    });

   }, []);  //


   useEffect(() => {
    console.log("selectedoption", selectedOption);
   }, [selectedOption]);  //

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
                    ¡Tu {transaccion} se ha realizado con exito!
                </CustomAlert>
            </Row>
            <div style={{ height: '20px' }} />
            {/*RECIBO DEL RETIRO REALIZADO*/}
            <Row className="align-items-center justify-content-center">
                <CustomCardRecibo width="500px" height="220px" bordered={false} color="#FFF6A7">
                    <Row className="justify-content-center">
                        <h5 className="text-center font-weight-bold">{nombre_cuenta}</h5>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <h5 style={{ fontSize: tamtexto*1.5 }} className="font-weight-bold">Fecha y hora:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ fontSize: tamtexto*1.5, textAlign: 'right'}}>{fecha_transaccion}</h5>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={5}>
                            <h5 style={{ fontSize: tamtexto*1.5 }} className="font-weight-bold">Nro de tarjeta:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ fontSize: tamtexto*1.5, textAlign: 'right'}}>{n_tarjeta}</h5>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={5}>
                            <h5 style={{ fontSize: tamtexto*1.5 }} className="font-weight-bold">Nro de cuenta:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ fontSize: tamtexto*1.5, textAlign: 'right'}}>{cci}</h5>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={5}>
                            <h5 style={{ fontSize: tamtexto*1.5 }} className="font-weight-bold">Monto retirado:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ fontSize: tamtexto*1.5, textAlign: 'right'}}>{terminologia}{monto_operacion}</h5>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={5}>
                            <h5 style={{ fontSize: tamtexto*1.5 }} className="font-weight-bold">Saldo disponible:</h5>
                        </Col>
                        <Col xs={7}>
                            <h5 style={{ fontSize: tamtexto*1.5, textAlign: 'right'}}>{terminologia2}{saldo}</h5>
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
                            checked={selectedOption}
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

export default FinRetiro;