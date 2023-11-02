import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import retiro from '../../images/operaciones/retiro_efectivo.png';
import consulta from '../../images/operaciones/consulta_saldo.png'
import deposito from '../../images/operaciones/deposito_efectivo.png'
import otras from '../../images/operaciones/otras_operaciones.png'

import fast_operation from '../../images/imagenes_perfil/senior/fast_option.png'
import last_operation from '../../images/imagenes_perfil/frecuente/ultima_operacion.png'


// Imagenes para el senior
import fast_operation_icon_ocasional from '../../images/imagenes_perfil/ocasional/retiro_rapido.png'
import help_icon from '../../images/imagenes_perfil/senior/help_icon.png'


// Imagenes para el ocasional
import retiro_personal from '../../images/imagenes_perfil/ocasional/retiro_personalizado.png'


// Para las operaciones rapidas
import fast_retiro from '../../images/operaciones/fast/fast_retiro.png'
import fast_deposito from '../../images/operaciones/fast/fast_deposito.png'

// Importamos card
import CustomCardMenu from '../components/generals/messageCarMenu';



import { useParams } from 'react-router-dom';

// Para traducir el texto
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// APIS
import { getPerfilByIdUserModel } from '../../api/axios_api';
import { get_user_model } from '../../api/axios_api';
import { getUsuarioById } from '../../api/axios_api';
import { listarCuentas } from '../../api/axios_api';

function MenuATM() {
    const { idUsuario, idUserModel } = useParams();
    const navigate = useNavigate();
      // Para el traductor de texto
    const { t, i18n } = useTranslation();

    var idCuenta = 2;

    // Para el cambio de idioma
    const [selectedOption, setSelectedOption] = useState('');

      // Función para cambiar el idioma
      const CambiarIdioma = (nuevoIdioma) => {
        i18n.changeLanguage(nuevoIdioma);
    };


    const handleOptionChange = (event) => {
        const selectedLang = event.target.value;
        setSelectedOption(selectedLang);
        CambiarIdioma(selectedLang);
        // Aquí puedes agregar cualquier otra lógica que desees ejecutar cuando el idioma cambie
    };

    // Para el cambio del tamaño del texto
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleOptionChange2 = (event) => {
        const newValue = event.target.value;
        setSelectedOption2(newValue);

        // Puedes agregar lógica adicional aquí según la opción seleccionada
        // Por ahora, solo imprimo el valor seleccionado en la consola
        console.log('Opción seleccionada:', newValue);
    };




    // OPCIONES PRINCIPALES
    // Para la primera opcion mas usada
    // Por ahora asumimos es el retiro de efectivo
    const handleCardClickP1 = async () => {        
        // Le damos a obtener ruta, para ello necesitamos saber cuantas cuentas tiene
        try {
            const response = await listarCuentas(idUsuario);
            console.log("cuentas listadas", response);

            if (response.CCI1 !== "0" && response.CCI2 !== "0") {
                // Hacer algo si ambas CCI1 y CCI2 son distintas de "0"
                console.log("Ambas CCI son distintas de '0'");
                navigate(`/retiro/seleccion-cuenta/${idUsuario}/${idUserModel}`);
            } else {
                // Hacer otra cosa si al menos una de ellas es "0"
                console.log("Al menos una de las CCI es '0'");

                if(response.CCI1 !== "0"){
                    var CCI_AUX = response.CCI1;
                    navigate(`/retiro/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
                }

                if(response.CCI2 !== "0"){
                    var CCI_AUX = response.CCI2;
                    navigate(`/retiro/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
                }
            }
        
        } catch (error) {
                    console.error('Error al obtener las cuentas del usuario:', error);
        }

        //navigate(`/retiro/seleccion-cuenta/${idUserModel}`);
      };

    // Para la segunda opcion mas usada
    const handleCardClickP2 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/consulta/seleccion-cuenta/${idUserModel}`);
      };

    // Para la tercera opcion mas usada
    const handleCardClickP3 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/deposito/seleccion-cuenta/${idUserModel}`);
      };
    
      const handleCardClick3 = () => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
        navigate(`/deposito/seleccion-cuenta/${idUserModel}`);
      };

    const handleCardOP2 = () =>{
        navigate(`/deposito/ingreso-billetes/${idUserModel}/${idCuenta}`);
    };




    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
        // Lógica para el botón de cancelar
        navigate(`/inicio`);
    };

    const handleContinue = () => {
        // Lógica para el botón de continuar
    };



    // Aqui hacemos el llamado al api de obtener perfil 
    // Manejamos un useEffect para llamarlo ni bien se renderice
    const [perfil_usuario, setPerfil] = useState(null);
    const [nombre, setNombre] = useState('');


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



        //Ahora obtenemos el userModel y luego los nombres del usuario
        get_user_model(idUserModel)
        .then(response_user_model => {
            // Actualiza el estado con los datos del perfil
            console.log("response usermodel", response_user_model);

            //Actualizamos el idioma preferido
            setSelectedOption(response_user_model.idiomaPreferido);
            CambiarIdioma(response_user_model.idiomaPreferido);

            // obtenemos ahora finalmente el nombre y apellido del usuario
            getUsuarioById(response_user_model.idUsuario)
            .then(response_usuario_data => {
                // Actualiza el estado con los datos del perfil
                console.log("response_usuario_data", response_usuario_data);
                setNombre(response_usuario_data.nombreCompleto);
              })
              .catch(error => {
                // Manejo de errores, por ejemplo, imprimir en la consola
                console.error('Error al obtener los nombres y apellidos del usuario:', error);
              });

          })
          .catch(error => {
            // Manejo de errores, por ejemplo, imprimir en la consola
            console.error('Error al obtener el userModel:', error);
          });
        

      }, []);  // El segundo parámetro del useEffect es un array de dependencias, pasamos un array vacío par



    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                {/*AQUI VA EL NOMBRE Y SI CAMBIA EL IDIOMA O NO AQUI*/}
                <Row className="justify-content-center align-items-center my-2">
                <Col xs={9} >
                    <h4>¡Hola, {nombre}!</h4>
                    <h5>¿Qué quieres hacer hoy?</h5>
                </Col>
                <Col xs={3} className="text-center">

                {perfil_usuario === 'frecuente' ||  perfil_usuario === 'ocasional' ? (
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
                ):(    
                    <p></p>
                )}

                </Col>
            </Row>


            {/*AQUI VAN LOS 3 CARDS PRINCIPALES */}
            <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClickP1} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={retiro} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold' }}>Retiro de efectivo</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClickP2} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={consulta} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold' }}>Consulta de saldo</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClickP3} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={deposito} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold' }}>Deposito de efectivo</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*Aqui van las descripciones*/}
            <Row className="d-flex justify-content-center">
                <Col xs="auto">
                
                    <div className="d-flex align-items-center">
                        <Image src={fast_operation} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6>{t('operaciones_rapidas')}</h6>
                    </div>

                    {/*AQUI VAN LAS OPCIONES*/}

                    <div style={{ height: '6px' }} />
                    {/*AQUI VA LA PRIMERA*/}
                    <Row>
                        <Card
                            onClick={handleCardClick3}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={fast_retiro} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Retiro Rapido        S/100</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div style={{ height: '8px' }} />
                    {/*AQUI VA LA SEGUNDA*/}

                    {perfil_usuario === 'ocasional' || perfil_usuario === 'senior' ? (
                        <Row>
                            <Card
                                onClick={handleCardClick3}
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                            >                        
                            <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={otras} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0">Otras operaciones</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    ):(        
                    <Row>
                        <Card
                            onClick={handleCardOP2}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={fast_deposito} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Deposito rapido        Soles</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    )}


                    {/*Aqui va el boton*/}
                    <Row className="d-flex justify-content-center mt-4">
                            <Button variant="danger" style={{ width: '150px', marginRight: '80px'}} onClick={handleCancel}>
                            {t('cerrar_sesion')}
                            </Button>
                    </Row>
                </Col>

                <Col xs={1}></Col>
                <Col xs="auto">

                {/*AQUI VARIA EL ENCABEZADO SEGUN EL USUARIO*/}
                {perfil_usuario === 'frecuente' ? (
                    <div className="d-flex align-items-center">
                        <Image src={last_operation} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6>Repetir mi ultima operacion</h6>
                    </div>

                ): perfil_usuario === 'ocasional' ?(
                    <div className="d-flex align-items-center">
                        <Image src={fast_operation_icon_ocasional} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6>{t('retiro_personalizado')}</h6>
                    </div>

                ): perfil_usuario === 'senior' ?(
                    <div className="d-flex align-items-center">
                        <Image src={help_icon} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} /> 
                        <h6>Accesibilidad</h6>
                    </div>
                ):(    
                    <p></p>
                )}
                
                <div style={{ height: '6px' }} />

                {/*AQUI VARIA LA PRIMERA OPCION SEGUN EL USUARIO*/}
                {perfil_usuario === 'senior' ? (
                    <>
                        <Row>
                            <CustomCardMenu
                                bgColor="#FDFFA7"
                                textColor="#000000"
                                width="300px"
                                height="90px"
                                rounded={false}
                                fontSize="14px"
                                marginLeft="0px"
                                idioma="es"
                                customText="¡ Recuerda que puedes cambiar el idioma y aumentar el tamaño de letra !"
                            />
                        </Row>
                    </>

                ): perfil_usuario === 'ocasional' ?(
                <Row>
                    <Card
                        onClick={handleCardClick3}
                        className="d-flex align-items-center"
                        style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                    >                        
                        <Card.Body className="m-0 p-1">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Image src={retiro_personal} alt="Descripción" width={40} height={40} />
                                </Col>
                                <Col xs="auto">
                                    <Row>
                                        <h7 className="m-0">Retiro        US$20</h7>
                                    </Row>
                                    <Row>
                                        <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>

                ): perfil_usuario === 'frecuente' ?(
                    <Row>
                        <Card
                            onClick={handleCardClick3}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={retiro} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0">Retiro        US$20</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0">Cuenta de ahorro - 324</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                ):(    
                    <p></p>
                )}

            <div style={{ height: '8px' }} />        
            {/*AQUI VA LA SEGUNDA OPCION QUE VARIA POR PERFIL*/}
                    {perfil_usuario === 'senior' ? (
                     <>  
                        <div style={{ height: '8px' }} />   
                        <Row>
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

                        <div style={{ height: '10px' }} />   
                        <Row>
                            <Form.Group>
                                <Form.Control
                                    as="select"
                                    onChange={handleOptionChange2}
                                    value={selectedOption2}
                                    className="text-right form-control-sm"
                                >
                                    <option value="">Cambiar de tamaño de letra</option>
                                    <option value="md">Mediano</option>
                                    <option value="gr">Grande</option>
                                    {/* Agrega más opciones de idioma según sea necesario */}
                                </Form.Control>
                            </Form.Group>
                        </Row>

                    </> 
                    ): perfil_usuario === 'ocasional' ?(
                        <CustomCardMenu
                            bgColor="#FDFFA7"
                            textColor="#000000"
                            width="300px"
                            height="70px"
                            rounded={false}
                            fontSize="14px"
                            marginLeft="0px"
                            idioma="es"
                            customText="¡ Gracias por usar el cajero, disfruta la experiencia personalizable ! "
                        />

                    ): perfil_usuario === 'frecuente' ?(
                        <Row>
                            <Card
                                onClick={handleCardClick3}
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                            >                        
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={otras} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0">Otras operaciones</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    ):(    
                            <p></p>
                    )}





                </Col>
            </Row>

                </Container>
            </Card>
        </Container>

        );
    }
    
    export default MenuATM;