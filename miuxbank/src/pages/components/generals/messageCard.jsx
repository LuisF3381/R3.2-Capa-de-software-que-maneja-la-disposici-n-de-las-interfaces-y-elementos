import {React, useEffect }from 'react';
import { Card, Container } from 'react-bootstrap';

// Para traducir el texto
import { useTranslation } from 'react-i18next';

const CustomCard = ({
    bgColor = "#33cc33",
    textColor = "white",
    width = "auto",
    height = "auto",
    rounded = true,
    fontSize = "16px", // Cambiado a px
    marginLeft = "0px",
    idioma = 'es',
}) => {


    // Para el traductor de texto
    const { t, i18n } = useTranslation();

        // Cambiar el idioma una vez al renderizar el componente
    useEffect(() => {
            i18n.changeLanguage(idioma); // Cambia al idioma que desees aquí
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
                border: 'none'
            }}>
                <Card.Body style={{ fontSize: fontSize }}>
                    <Card.Text>
                    {t('message_personalizado')}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CustomCard;

