import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Image, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import BankComponent from '../components/generals/upVar';
import { ClipLoader } from 'react-spinners';

import contando_efectivo from '../../images/intermedia/contando_efectivo.png'

import { useNavigate } from 'react-router-dom';


function Deposito1_intermediate() {
    // Acceder a los parámetros
    const { state } = useLocation();
    console.log("State", state);

    const navigate = useNavigate();

    // Propiedades del spinner
    const [loading, setLoading] = useState(true);

    const override = {
           display: "block",
           margin: "0 auto",
    };


    // Establece el tiempo en milisegundos (ej. 5000 para 5 segundos)
    const tiempoEspera = 3500;
    
    // Utiliza setTimeout para redirigir después de cierta cantidad de tiempo
    setTimeout(() => {
        navigate(state.response_ruta);
    }, tiempoEspera);

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
        <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
            <Container>
            <BankComponent />
            <div style={{ height: '20px' }} />
            
            <div className="sweet-loading" style={{ width: '100%', textAlign: 'center' }}>
                <ClipLoader size={160} color={"#123abc"} loading={loading} css={override} />
            </div>

            <div style={{ height: '20px' }} />
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2>Estamos procesando tu operación</h2>
                </Col>
            </Row>

            <div style={{ height: '30px' }} />
            <Row className="justify-content-center align-items-center">
                <Col xs="auto">
                    <h4>Contando el efectivo</h4>
                </Col>
                <Col xs="auto">
                    <Image src={contando_efectivo} style={{ width: '120px', height: 'auto' }} />
                </Col>
            </Row>

         
            </Container>
        </Card>
        </Container>         
  
        );

    }


export default Deposito1_intermediate;
