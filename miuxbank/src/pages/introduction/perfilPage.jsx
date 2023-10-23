import React, { useState, useEffect } from 'react';
import BankComponent from '../components/generals/upVar';
import CustomCard from '../components/generals/messageCard.jsx';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';

// Para el cliente senior
import interfaz from '../../images/imagenes_perfil/senior/interfaz_fast.png';
import cambio_texto from '../../images/imagenes_perfil/senior/cambia_texto.png';
import fast_option from '../../images/imagenes_perfil/senior/fast_option.png';

// Para el cliente ocasional
import ultima_operacion from '../../images/imagenes_perfil/frecuente/ultima_operacion.png';

// Para el ocasional
import retiro_rapido from '../../images/imagenes_perfil/ocasional/retiro_rapido.png';



import user_senior from '../../images/imagenes_perfil/senior/user_senior.png'
import user_frecuente from '../../images/imagenes_perfil/frecuente/user_frecuente.png'
import user_ocasional from '../../images/imagenes_perfil/ocasional/user_ocasional.png'

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Para traducir el texto
import { useTranslation } from 'react-i18next';


// API DE MOD PERSONALIZATION
import { getPerfilByIdUserModel } from '../../api/axios_api';



function PerfilPage() {
    const { idUserModel } = useParams();
    const navigate = useNavigate();
    // Para el traductor de texto
    const { t, i18n } = useTranslation();

    var idioma_aux;

    const buttonText = "CONTINUAR";
    const checkboxLabel = "No volver a mostrar";
    const [selectedOption, setSelectedOption] = useState('');
    

    const handleButtonClick = () => {
        console.log("Button clicked");


        
        navigate(`/principal/${idUserModel}`);
    };

    const handleCheckboxChange = () => {
        console.log("Checkbox changed");
    };


    // Aqui hacemos el llamado al api de obtener perfil 
    // Manejamos un useEffect para llamarlo ni bien se renderice
    const [perfil_usuario, setPerfil] = useState(null);
    
    useEffect(() => {
        // Llama a la función que realiza la solicitud de la API
        getPerfilByIdUserModel(idUserModel)
          .then(response => {
            // Actualiza el estado con los datos del perfil
            console.log("response", response);
                if (response.descripcion.includes('Senior')) {
                    setPerfil('senior'); 
                } else if (response.descripcion.includes('Frecuente')) {
                    setPerfil('frecuente'); 
                } else if (response.descripcion.includes('Ocasional')) {
                    setPerfil('ocasional'); 
                } 
          })
          .catch(error => {
            // Manejo de errores, por ejemplo, imprimir en la consola
            console.error('Error al obtener el perfil:', error);
          });
      }, []);  // El segundo parámetro del useEffect es un array de dependencias, pasamos un array vacío par





    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                
                <Row>
                    <h4 style={{  margin: 15, fontWeight: 'bold', textAlign: 'left' }}>{t('welcome')}</h4>
                </Row>
                <Row>
                    <Col md={7} >
                    {/*IFS PARA EL TEXTO DE PRESENTACION */}
                    {perfil_usuario === 'senior' ? (
                        <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px',}}>{t('senior_descp')}</p>
                        ): perfil_usuario === 'frecuente' ? (
                            <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px',}}>{t('frecuente_descp')}</p>
                        ): perfil_usuario === 'ocasional' ?(
                            <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px',}}>{t('ocasional_descp')}</p>
                        ):(
                            <p></p>
                        )}

                    <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '20px',}}>{t('pres_func')}</p>

                    {/*IFS PARA LOS LIST GROUPS */}
                    {perfil_usuario === 'senior' ? (
                    <ListGroup style = {{margin: 15}}>
                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col xs={1}>
                                    <Image src={interfaz} rounded style={{ width: '45px', height: 'auto' }} />
                                </Col>
                                <Col>
                                    <h7 style={{ margin: 30, fontSize: '18px' }}>{t('interfaz_simple')}</h7>
                                </Col>
                                </Row>
                        </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="align-items-center">
                                    <Col xs={1}>
                                        <Image src={cambio_texto} rounded style={{ width: '38px', height: 'auto' }} />
                                    </Col>
                                    <Col>
                                        <h7 style={{ margin: 30, fontSize: '18px' }}>{t('cambio_texto')}</h7>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="align-items-center">
                                    <Col xs={1} >
                                        <Image src={fast_option} rounded style={{ width: '38px', height: 'auto' }} />
                                    </Col>
                                    <Col>
                                        <h7 style={{ margin: 30, fontSize: '18px' }}>{t('fast_op_1')}</h7>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                    </ListGroup>
                        ): perfil_usuario === 'frecuente' ? (
                        <ListGroup style = {{margin: 15}}>
                            <ListGroup.Item>
                                <Row className="align-items-center">
                                    <Col xs={1}>
                                        <Image src={ultima_operacion} rounded style={{ width: '45px', height: 'auto' }} />
                                    </Col>
                                    <Col>
                                        <h7 style={{ margin: 30, fontSize: '18px' }}>{t('last_operacion')}</h7>
                                    </Col>
                                    </Row>
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row className="align-items-center">
                                        <Col xs={1} >
                                            <Image src={fast_option} rounded style={{ width: '38px', height: 'auto' }} />
                                        </Col>
                                        <Col>
                                            <h7 style={{ margin: 30, fontSize: '18px' }}>{t('fast_op_2')}</h7>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                        </ListGroup>
                        ): perfil_usuario === 'ocasional' ?(
                            <ListGroup style = {{margin: 15}}>
                            <ListGroup.Item>
                                <Row className="align-items-center">
                                    <Col xs={1}>
                                        <Image src={retiro_rapido} rounded style={{ width: '45px', height: 'auto' }} />
                                    </Col>
                                    <Col>
                                        <h7 style={{ margin: 30, fontSize: '18px' }}>{t('retiro_rapido')}</h7>
                                    </Col>
                                    </Row>
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row className="align-items-center">
                                        <Col xs={1} >
                                            <Image src={fast_option} rounded style={{ width: '38px', height: 'auto' }} />
                                        </Col>
                                        <Col>
                                            <h7 style={{ margin: 30, fontSize: '18px' }}>{t('fast_op_1')}</h7>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                        </ListGroup>
                        ):(
                            <p></p>
                        )}



                    <Row>
                        <CustomCard 
                            bgColor="#FDFFA7" 
                            textColor="#000000" 
                            width="380px" 
                            height="88px" 
                            rounded={false}
                            fontSize="15px" 
                            marginLeft="1px"
                            idioma = {idioma_aux}
                        />
                    </Row>
                    </Col>

                    {/**COLUMNA DONDE VA LA IMAGEN**/}
                    <Col>

                        {/*LA IMAGEN VARIA EN BASE A EL PERFIL*/}
                        {perfil_usuario === 'senior' ? (
                        <Row>
                            <Image src={user_senior} alt="Ilustración" rounded style={{ width: '280px', height: 'auto' }}/>
                        </Row>
                        ): perfil_usuario === 'frecuente' ? (
                        <Row>
                            <Image src={user_frecuente} alt="Ilustración" rounded style={{ width: '280px', height: 'auto' }}/>
                        </Row>
                        ): perfil_usuario === 'ocasional' ?(
                        <Row>
                            <Image src={user_ocasional} alt="Ilustración" rounded style={{ width: '280px', height: 'auto' }}/>
                        </Row>
                        ):(
                            <p></p>
                        )}

                        {/*BOTONES GENERICOS*/}
                        <div style={{ height: "15px" }} />
                        <Row className="justify-content-center mt-3">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check 
                                    type="checkbox" 
                                    label={t('no_mostrar')} 
                                    onChange={handleCheckboxChange}
                                    defaultChecked={true}
                                />
                            </Form.Group>
                        </Row>
                        <div style={{ height: "20px" }} />
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <Button variant="primary" style={{ width: '150px'}} onClick={handleButtonClick}>
                                {t('continue')}
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
