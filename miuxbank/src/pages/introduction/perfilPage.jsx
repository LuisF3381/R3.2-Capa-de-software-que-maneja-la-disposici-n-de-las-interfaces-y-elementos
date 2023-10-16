import React, { useState } from 'react';
import BankComponent from '../components/generals/upVar';
import CustomCard from '../components/generals/messageCard.jsx';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';

import interfaz from '../../images/imagenes_perfil/senior/interfaz_fast.png';
import cambio_texto from '../../images/imagenes_perfil/senior/cambia_texto.png';
import fast_option from '../../images/imagenes_perfil/senior/fast_option.png';


import user_senior from '../../images/imagenes_perfil/senior/user_senior.png'


import { useParams } from 'react-router-dom';


function PerfilPage() {
    const { idUserModel } = useParams();
    const buttonText = "CONTINUAR";
    const checkboxLabel = "No volver a mostrar";
    const [selectedOption, setSelectedOption] = useState('');
    console.log("idUserModel",idUserModel);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      const handleButtonClick = () => {
        console.log("Button clicked");
    };

    const handleCheckboxChange = () => {
        console.log("Checkbox changed");
    };

    //Aqui guardamos el perfil
    const perfil_usuario = 'senior'; 



    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                
                <Row>
                    <h4 style={{  margin: 15, fontWeight: 'bold', textAlign: 'left' }}>¡Bienvenido a tu nuevo perfil!</h4>
                </Row>
                <Row>
                    <Col md={7} >
                    <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px',}}>Te hemos clasificado como Cliente Senior, el cajero se adaptará mejor a tus necesidades</p>
                    <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px',}}>Ahora cuentas con:</p>

                    <ListGroup style = {{margin: 15}}>
                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col xs={1}>
                                    <Image src={interfaz} rounded style={{ width: '45px', height: 'auto' }} />
                                </Col>
                                <Col>
                                    <h7 style={{ margin: 30, fontSize: '18px' }}>Interfaz simplicada</h7>
                                </Col>
                                </Row>
                        </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="align-items-center">
                                    <Col xs={1}>
                                        <Image src={cambio_texto} rounded style={{ width: '38px', height: 'auto' }} />
                                    </Col>
                                    <Col>
                                        <h7 style={{ margin: 30, fontSize: '18px' }}>Cambio de tamaño de texto</h7>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="align-items-center">
                                    <Col xs={1} >
                                        <Image src={fast_option} rounded style={{ width: '38px', height: 'auto' }} />
                                    </Col>
                                    <Col>
                                        <h7 style={{ margin: 30, fontSize: '18px' }}>Una opción rapida</h7>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                    </ListGroup>

                    <Row>
                        <CustomCard 
                            bgColor="#FDFFA7" 
                            textColor="#000000" 
                            width="380px" 
                            height="84px" 
                            rounded={false}
                            fontSize="18px" 
                            marginLeft="1px"
                        />
                    </Row>
                    </Col>

                    {/**COLUMNA DONDE VA LA IMAGEN**/}
                    <Col>

                        {/*LA IMAGEN VARIA EN BASE A EL PERFIL*/}
                        <Row>
                            <Image src={user_senior} alt="Ilustración" rounded style={{ width: '280px', height: 'auto' }}/>
                        </Row>

                        {/*BOTONES GENERICOS*/}
                        <div style={{ height: "15px" }} />
                        <Row className="justify-content-center mt-3">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check 
                                    type="checkbox" 
                                    label={checkboxLabel} 
                                    onChange={handleCheckboxChange}
                                    defaultChecked={true}
                                />
                            </Form.Group>
                        </Row>
                        <div style={{ height: "20px" }} />
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <Button variant="primary" size={"lg"} onClick={handleButtonClick}>
                                {buttonText}
                                </Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>



                </Container>
            </Card>
        </Container>
    );
}

export default PerfilPage;
