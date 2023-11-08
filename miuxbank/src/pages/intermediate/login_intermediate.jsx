import React from 'react';

import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Image, Button } from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';


function Login_intermediate() {
  // Acceder a los parámetros
  const { state } = useLocation();
  console.log("State", state);

return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
      <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
        <Container>
        <BankComponent />




        </Container>
      </Card>
    </Container>  
);

}

export default Login_intermediate;