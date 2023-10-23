import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

// Para traducir el texto
import { useTranslation } from 'react-i18next';

import accesibles from '../../../images/imagenes_perfil/ocasional/accesible.png';

const CustomCardMenu = ({
    bgColor = "#33cc33",
    textColor = "white",
    width = "auto",
    height = "auto",
    rounded = true,
    fontSize = "16px",
    marginLeft = "0px",
    idioma = 'es',
    customText = 'Texto personalizado', // Agrega tu propio texto personalizado aquí
}) => {
    // Para el traductor de texto
    const { t, i18n } = useTranslation();

    // Cambiar el idioma una vez al renderizar el componente
    useEffect(() => {
        i18n.changeLanguage(idioma);
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ marginLeft: marginLeft }}>
            <Card style={{
                backgroundColor: bgColor,
                color: textColor,
                width: width,
                height: height,
                borderRadius: rounded ? '15px' : '0px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                border: 'none',
                marginBottom: '0'
            }}>
                {/* Agrega la imagen al encabezado del Card */}
                
                <Card.Body style={{ fontSize: fontSize }}>
                    {/* Agrega tu texto personalizado */}
                    <Card.Text>
                        <Row>
                            <Col xs={2}>
                                <Image src={accesibles} alt="Descripción" width={40} height={40} />
                            </Col>
                            <Col>
                                {customText}
                            </Col>   
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CustomCardMenu;
