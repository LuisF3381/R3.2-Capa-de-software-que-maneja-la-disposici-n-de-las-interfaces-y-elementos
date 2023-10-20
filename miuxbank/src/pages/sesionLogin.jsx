import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { Container, Row, Col, Card, Form, Image, Button } from 'react-bootstrap';
import BankComponent from '../pages/components/generals/upVar';

// Para traducir el texto
import { useTranslation } from 'react-i18next';

//Imagenes
import candado from '../images/candado.png';

function LoginPage() {
  const { idUserModel } = useParams();
  const navigate = useNavigate();


  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const nuevoIdioma = event.target.value;
    setSelectedOption(nuevoIdioma);
    CambiarIdioma(nuevoIdioma);
  };

  // Para el traductor de texto
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const CambiarIdioma = (nuevoIdioma) => {
    i18n.changeLanguage(nuevoIdioma);
  };


    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
        // Lógica para el botón de cancelar
        navigate('/inicio');
    };

    const handleContinue = () => {
        // Lógica para el botón de continuar
        navigate(`/bienvenido/${idUserModel}`);
    };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
      <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
        <Container>
          <BankComponent />
          <div style={{ height: '20px' }} />
          <Row xs={4} className="justify-content-end">
            <Form.Group>
              <Form.Control
                as="select"
                onChange={handleOptionChange}
                value={selectedOption}
                className="text-right form-control-sm"
              >
                <option value="">Cambiar idioma</option>
                <option value="es">Español</option>
                <option value="qu">Quechua</option>
                {/* Agrega más opciones de idioma según sea necesario */}
              </Form.Control>
            </Form.Group>
          </Row>

        <div style={{ height: '20px' }} />
        <Row className="justify-content-center">
            <Col xs="auto">
                <h3>{t('login')}</h3>
            </Col>
        </Row>
        <div style={{ height: '20px' }} />
        <Row className="justify-content-center mb-4">
            <Col xs="auto">
                <Form.Control
                type="password"
                placeholder="****"
                style={{
                    fontSize: '18px',        // Establece el tamaño de la fuente
                    textAlign: 'center'      // Centra el texto horizontalmente
                }}
                />
            </Col>
        </Row>
        <div style={{ height: '20px' }} />
        <Row className="align-items-center justify-content-center mb-4">
            <Col xs="auto">
                <Image src={candado} style={{ width: '55px', height: 'auto' }} />
            </Col>
            <Col xs={4} className="text-center"> {/* Agrega la clase "text-center" */}
                <h7>{t('rimender')}</h7>
            </Col>
        </Row>

        <div style={{ height: '20px' }} />
        <Row className="d-flex justify-content-center mt-4">
            <Col xs="auto">
                <Button variant="danger" style={{ width: '150px', margin: '0 100px' }} onClick={handleCancel}>
                {t('exit')}
                </Button>
            </Col>
            <Col xs="auto">
                <Button variant="primary" style={{ width: '150px', margin: '0 100px' }} onClick={handleContinue}>
                {t('continue')}
                </Button>
            </Col>
        </Row>



        </Container>
      </Card>
    </Container>
  );
}

export default LoginPage;
