import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';

import depositar_billetes from '../../images/deposito_billetes.png'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { infoCuenta } from '../../api/axios_api';

function DepositoEfectivo() {
    let { idUserModel, CCI, moneda } = useParams();
    const navigate = useNavigate();

    // VARIABLES PARA CUENTA
    const [nombreCuenta1, setNombreCuenta1] = useState('');
    const [CC1, setCC1] = useState('');
    const [tipoC1, setTipoC1] = useState('');
    const [tipoC1Name, setTipoC1Name] = useState('');

    // Para el tema del tiempo
    const [tiempoRestante, setTiempoRestante] = useState(40);

    useEffect(() => {
        infoCuenta(CCI)
        .then(response => {
            console.log("Response", response);
            setNombreCuenta1(response.cuentaBancaria);
            setCC1(response.CCI);

            if(moneda === "S"){
                setTipoC1("Soles");
            }else{
                setTipoC1("Dolares");
            }

        })
        .catch(error => {
          // Manejo de errores, por ejemplo, imprimir en la consola
          console.error('Error al obtener lista de cuentas:', error);
        });
    }, [navigate]);  //


    useEffect(() => {
        const temporizador = setInterval(() => {
          setTiempoRestante(prevTiempo => prevTiempo - 1);
        }, 1000);
    
        return () => clearInterval(temporizador);
      }, []);

      useEffect(() => {
        if (tiempoRestante === 0) {
            cambio_pest();
        }
      }, [tiempoRestante]);


      const cambio_pest = () => {
        navigate(`/deposito/resumen-deposito/${idUserModel}/${CCI}/${moneda}`)
      };
    

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent/>

            <div style={{ height: '8px' }} />
            <Row>
                <Col md={7}>
                    <h3>Ingrese los billetes en la bandeja</h3>
                    <h5 style={{ marginRight : '10px' }}>Depositando {tipoC1}</h5>
                    <h5 style={{ marginRight : '10px' }}>{nombreCuenta1}</h5>
                    <h5 style={{ marginRight : '10px' }}>Cuenta de destino: {CC1}</h5>

                </Col>

                <Col md={5} className="d-flex align-items-center">
                </Col>
            </Row>

            {/*AQUI VAN LAS CUENTAS  QUE SE PUEDEN SELECCIONAR*/}
            <div style={{ height: '40px' }} />
            <Row className="justify-content-center">
                <Col xs="auto"></Col>
                <Col xs={4} >
                    {/*IMAGEN*/}
                    <Row className="justify-content-center">
                        <Image src={depositar_billetes} alt="Descripción" width={80} height={184} />
                    </Row>
                    <div style={{ height: '15px' }} />
                    <Row className="justify-content-center">
                        <h5 className="text-center">La bandeja se cerrará en {tiempoRestante} segundos</h5>
                    </Row>


                    <div style={{ height: '30px' }} />
                </Col>
                <Col xs="auto"></Col>
            </Row>

            </Container>
            </Card>
        </Container>
        );
    }
    
    export default DepositoEfectivo;

