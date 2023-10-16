import React from 'react';
import { Card, Container } from 'react-bootstrap';

const CustomCard = ({
    bgColor = "#33cc33",
    textColor = "white",
    width = "auto",
    height = "auto",
    rounded = true,
    fontSize = "16px", // Cambiado a px
    marginLeft = "0px"
}) => {
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
                        Pero eso no es todo, ¡ajustaremos aún mas tu experiencia en base a tus operaciones!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CustomCard;

