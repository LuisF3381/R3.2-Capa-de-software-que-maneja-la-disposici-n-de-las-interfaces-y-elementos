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
import fast_consulta from '../../images/operaciones/fast/fast_consulta.png'

// Importamos card
import CustomCardMenu from '../components/generals/messageCarMenu';



import { useParams } from 'react-router-dom';

// Para traducir el texto
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// APIS
import { getOperationModel, getPerfilByIdUserModel } from '../../api/axios_api';
import { get_user_model } from '../../api/axios_api';
import { getUsuarioById } from '../../api/axios_api';
import { listarCuentas } from '../../api/axios_api';

import { getRouteOperacion } from '../../api/axios_api';
import { actualizar_user_model_texto } from '../../api/axios_api';
import { actualizar_idioma_preferido } from '../../api/axios_api';
import { insertarMetrica } from '../../api/axios_api';

// Logo de reloj de arena
import reloj_arena from '../../images/reloj_arena.png'



function MenuATM() {
    const { idUsuario, idUserModel } = useParams();
    const navigate = useNavigate();
      // Para el traductor de texto
    const { t, i18n } = useTranslation();

    const [tiempoInicio, setTiempoInicio] = useState(null);

    // Para el cambio de idioma
    const [selectedOption, setSelectedOption] = useState('');

    // Función para cambiar el idioma
    const CambiarIdioma = (nuevoIdioma) => {
        i18n.changeLanguage(nuevoIdioma);
    };


    const handleOptionChange = async(event) => {
        const selectedLang = event.target.value;
        setSelectedOption(selectedLang);
        CambiarIdioma(selectedLang);
        // Aquí puedes agregar cualquier otra lógica que desees ejecutar cuando el idioma cambie
        console.log("Aqui hago un axios para actualizar el idioma del user model");

        try {
            const response = await actualizar_idioma_preferido(idUserModel, selectedLang);
            console.log("Respuesta del api", response);

        } catch (error) {
            console.error('Error al obtener las cuentas del usuario:', error);
        }

    };

    // Para el cambio del tamaño del texto
    const [tamtexto, setTamtexto] = useState('');

    const handleOptionChange2 = (event) => {
        const newValue = event.target.value;
        setTamtexto(newValue);

        actualizar_user_model_texto(idUserModel, newValue);

        // Puedes agregar lógica adicional aquí según la opción seleccionada
        // Por ahora, solo imprimo el valor seleccionado en la consola
        console.log('Opción seleccionada:', newValue);
    };




    // OPCIONES PRINCIPALES
    // Para la primera opcion mas usada
    // Por ahora asumimos es el retiro de efectivo
    const handleCardClickP1 = async () => {   
            // Crear un objeto de fecha con la zona horaria de Perú (UTC-5)
            const fechaActual = new Date().toLocaleString("en-US", { timeZone: "America/Lima" });

            // Restar 5 horas al objeto de fecha
            const fechaAtrasada = new Date(new Date(fechaActual).getTime() - 5 * 60 * 60 * 1000);

            // Formatear la fecha y hora en formato ISO
            const fechaISOAtrasada = fechaAtrasada.toISOString();

            console.log(fechaISOAtrasada);

            const tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
            // Para las metricas
        const metricaData = {
            descripcion: 'Pantalla Menu Principal',
            tiempoUsoPantalla: tiempoTranscurrido,
            fechaMetrica: fechaISOAtrasada,
            user_model_id: idUserModel,
          };

        const response = await insertarMetrica(metricaData);
        console.log("Response", response);


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
        navigate(`/consulta/seleccion-cuenta/${idUsuario}/${idUserModel}`);
      };

    // Para la tercera opcion mas usada
    const handleCardClickP3 = async() => {
        // Esta función se llamará cuando se haga clic en la tarjeta
        // Puedes realizar las acciones necesarias aquí
                // Le damos a obtener ruta, para ello necesitamos saber cuantas cuentas tiene
                try {
                    const response = await listarCuentas(idUsuario);
                    console.log("cuentas listadas", response);
        
                    if (response.CCI1 !== "0" && response.CCI2 !== "0") {
                        // Hacer algo si ambas CCI1 y CCI2 son distintas de "0"
                        console.log("Ambas CCI son distintas de '0'");
                        navigate(`/deposito/seleccion-cuenta/${idUsuario}/${idUserModel}`);
                    } else {
                        // Hacer otra cosa si al menos una de ellas es "0"
                        console.log("Al menos una de las CCI es '0'");
        
                        if(response.CCI1 !== "0"){
                            var CCI_AUX = response.CCI1;
                            navigate(`/deposito/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
                        }
        
                        if(response.CCI2 !== "0"){
                            var CCI_AUX = response.CCI2;
                            navigate(`/deposito/seleccion-moneda/${idUsuario}/${idUserModel}/${CCI_AUX}`);
                        }
                    }
                
                } catch (error) {
                            console.error('Error al obtener las cuentas del usuario:', error);
                }
        
      };
    


    // Fucniones para las opciones de la subseccion
    const handleCardClick_sub1_1 = async(idOperacionOpRap1) => {
        // Llamamos al api que obtiene la ruta y comenzamos
        //getRouteOperacion
        console.log("idOperacionOpRap1", idOperacionOpRap1);
        try {
            const response = await getRouteOperacion( idOperacionOpRap1, idUsuario);
            navigate(response);
            console.log("response_op", response);
        } catch (error) {
            console.error('Error al obtener la ruta siguiente:', error);
        }

      };


          // Fucniones para las opciones de la subseccion
    const handleCardClick_sub2_1 = async(idOperacionrRetRap) => {
        // Llamamos al api que obtiene la ruta y comenzamos
        //getRouteOperacion
        console.log("idOperacionOpRap1", idOperacionrRetRap);
        try {
            const response = await getRouteOperacion( idOperacionrRetRap, idUsuario);
            navigate(response);
            console.log("response_op", response);
        } catch (error) {
            console.error('Error al obtener la ruta siguiente:', error);
        }

    };




    // Aquí puedes agregar el manejo de eventos o cualquier lógica adicional
    const handleCancel = () => {
        // Lógica para el botón de cancelar
        navigate(`/inicio`);
    };

    const handleContinue = () => {
        // Lógica para el botón de continuar
    };

    // Variables para setear las acciones personalizables

    //OP1
    const [idOperacionOpRap1, setIdOperacionOpRap1] = useState (-1);
    const [nombreOpRap1, setNombreOpRap1] = useState('');
    const [montoOpRap1, setMontoOpRap1] = useState('');
    const [termOpRap1, setTermOpRap1] = useState('');
    const [cuentaOpRap1, setCuentaOpRap1] = useState('');
    const [imgOpRap1, setImgOpRap1] = useState(null);


    //OP2
    const [idOperacionOpRap2, setIdOperacionOpRap2] = useState (-1);
    const [nombreOpRap2, setNombreOpRap2] = useState('');
    const [montoOpRap2, setMontoOpRap2] = useState('');
    const [termOpRap2, setTermOpRap2] = useState('');
    const [cuentaOpRap2, setCuentaOpRap2] = useState('');
    const [imgOpRap2, setImgOpRap2] = useState(null);

    //RetOP
    const [idOperacionRetRap, setIdOperacionRetRap] = useState (-1);
    const [nombreRetRap, setNombreRetRap] = useState('');
    const [montoRetRap, setMontoRetRap] = useState('');
    const [termRetRap, setTermRetRap] = useState('');
    const [cuentaRetRap, setCuentaRetRap] = useState('');
    const [imgRetRap, setImgRetRap] = useState(null);

    //UltOP
    const [idOperacionUltOP, setIdOperacionUltOP] = useState (-1);
    const [nombreUltOP, setNombreUltOP] = useState('');
    const [montoUltOP, setMontoUltOP] = useState('');
    const [termUltOP, setTermUltOP] = useState('');
    const [cuentaUltOP, setCuentaUltOP] = useState('');
    const [imgUltOP, setImgUltOP] = useState(null);

    const actualizarOperacionesPersonalizables = async (response_user_model) => {
        const actualizarOperacion = async (op, setID, setNombre, setTerm, setMonto, setCuenta, setImg) => {
            if (op !== null) {
                const response = await getOperationModel(op);
                setID(op);
                setNombre(response.tipoOperacion);
    
                if (response.moneda === "S") {
                    setTerm("S/");
                } else if (response.moneda === "D") {
                    setTerm("US$");
                }
    
                setMonto(response.montOperacion);
                setCuenta(response.cuentaDestino);
    
                if (setImg) {
                    if (response.tipoOperacion === "Deposito") {
                        setImg(deposito);
                    } else if (response.tipoOperacion === "Retiro") {
                        setImg(retiro);
                    } else if (response.tipoOperacion === "Consulta") {
                        setImg(consulta);
                    }
                }
            }
        };
    
        actualizarOperacion(response_user_model.opRapida1, setIdOperacionOpRap1, setNombreOpRap1, setTermOpRap1, setMontoOpRap1, setCuentaOpRap1, setImgOpRap1);
        actualizarOperacion(response_user_model.opRapida2, setIdOperacionOpRap2, setNombreOpRap2, setTermOpRap2, setMontoOpRap2, setCuentaOpRap2, setImgOpRap2);
        actualizarOperacion(response_user_model.opRetRapido, setIdOperacionRetRap, setNombreRetRap, setTermRetRap, setMontoRetRap, setCuentaRetRap);
        actualizarOperacion(response_user_model.ultOp, setIdOperacionUltOP, setNombreUltOP, setTermUltOP, setMontoUltOP, setCuentaUltOP, setImgUltOP);
    };
    


    // Aqui hacemos el llamado al api de obtener perfil 
    // Manejamos un useEffect para llamarlo ni bien se renderice
    const [perfil_usuario, setPerfil] = useState(null);
    const [nombre, setNombre] = useState('');

useEffect(() => {
    setTiempoInicio(Date.now());
  Promise.all([
    getPerfilByIdUserModel(idUserModel),
    get_user_model(idUserModel)
  ])
    .then(([response, response_user_model]) => {
      console.log("response", response);
      console.log("response usermodel", response_user_model);

      // Procesa la respuesta del perfil
      if (response.descripcion.includes('Senior')) setPerfil('senior');
      else if (response.descripcion.includes('Frecuente')) setPerfil('frecuente');
      else if (response.descripcion.includes('Ocasional')) setPerfil('ocasional');

      // Procesa la respuesta del userModel
      setTamtexto(response_user_model.tamFuente || 13);
      actualizarOperacionesPersonalizables(response_user_model);
      setSelectedOption(response_user_model.idiomaPreferido);
      CambiarIdioma(response_user_model.idiomaPreferido);

      // Obtiene el nombre del usuario
      return getUsuarioById(response_user_model.idUsuario);
    })
    .then(response_usuario_data => {
      console.log("response_usuario_data", response_usuario_data);
      setNombre(response_usuario_data.nombreCompleto);
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}, []); // El segundo parámetro del useEffect es un array de dependencias, pasamos un array vacío par

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                {/*AQUI VA EL NOMBRE Y SI CAMBIA EL IDIOMA O NO AQUI*/}
                <Row className="justify-content-center align-items-center my-2">
                <Col xs={9} >
                    <h4 style={{ fontSize: tamtexto*1.75 }}>¡{t('hola')}, {nombre}!</h4>
                    <h5 style={{ fontSize: tamtexto*1.5 }}>{t('que_quieres_hoy')}</h5>
                </Col>
                <Col xs={3} className="text-center">
                <h4 style={{ fontSize: tamtexto*0.9 }}>Cambiar idioma</h4>

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

                </Col>
            </Row>


            {/*AQUI VAN LOS 3 CARDS PRINCIPALES */}
            <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClickP1} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={retiro} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold', fontSize: tamtexto*1.05 }}>{t('retiro')}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClickP2} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={consulta} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold', fontSize: tamtexto*1.05 }}>{t('consulta')}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Card onClick={handleCardClickP3} className="text-center p-2" style={{ width: '230px', height: '100px', cursor: 'pointer' }}>
                        <Card.Img variant="top" src={deposito} style={{ maxWidth: '22%', margin: '0 auto', marginBottom: '-10px' }} />
                        <Card.Body>
                            <p style={{ fontWeight: 'bold', fontSize: tamtexto*1.05 }}>{t('deposito')}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*Aqui van las descripciones*/}
            <Row className="d-flex justify-content-center">
                <Col xs="auto">
                
                    <div className="d-flex align-items-center">
                        <Image src={fast_operation} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6 style={{ fontSize: tamtexto*1.2 }}>{t('operaciones_rapidas')}</h6>
                    </div>

                    {/*AQUI VAN LAS OPCIONES*/}

                    <div style={{ height: '6px' }} />
                    {/*AQUI VA LA PRIMERA QUE ES UNA OPCION RAPIDA*/}
                    <Row>
                        {/* IF por si no tiene aun operaciones */}
                        {idOperacionOpRap1 === -1 ? (
                            <>
                            <Card
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px'}}
                                >
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={reloj_arena} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>Disponible pronto</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>                              
                            </Card> 
                            </>   
                        ):(
                        <>
                            <Card
                            onClick={() => handleCardClick_sub1_1(idOperacionOpRap1)}
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                                >                        
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={imgOpRap1} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{nombreOpRap1} Rapido        {termOpRap1}{montoOpRap1}</h7>
                                            </Row>
                                            <Row>
                                                <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{cuentaOpRap1}</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            </>
                            )}

                    </Row>
                    <div style={{ height: '8px' }} />
                    {/*AQUI VA LA SEGUNDA*/}

                    {perfil_usuario === 'ocasional' || perfil_usuario === 'senior' ? (
                        <Row>
                            <Card
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px' }}
                            >                        
                            <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={otras} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0"  style={{ fontSize: tamtexto*1.15 }}>{t('otras_operaciones')}</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    ):(        
                    <Row>
                        {idOperacionOpRap2 === -1 ? (
                            <>
                            <Card
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px'}}
                                >
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={reloj_arena} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>Disponible pronto</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>                              
                            </Card> 
                            </>   
                        ):(
                            <>
                        <Card
                           onClick={() => handleCardClick_sub1_1(idOperacionOpRap2)}
                           className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={imgOpRap2} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{nombreOpRap2} Rapido        {termOpRap2}{montoOpRap2}</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{cuentaOpRap2}</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </>
                        )}

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

                {/* SEGUNDA COLUMNA DE OPCIONES */}
                {/*AQUI VARIA EL ENCABEZADO SEGUN EL USUARIO*/}
                {perfil_usuario === 'frecuente' ? (
                    <div className="d-flex align-items-center">
                        <Image src={last_operation} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6 style={{ fontSize: tamtexto*1.2 }}>Repetir mi ultima operacion</h6>
                    </div>

                ): perfil_usuario === 'ocasional' ?(
                    <div className="d-flex align-items-center">
                        <Image src={fast_operation_icon_ocasional} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} />
                        <h6 style={{ fontSize: tamtexto*1.2 }}>{t('retiro_personalizado')}</h6>
                    </div>

                ): perfil_usuario === 'senior' ?(
                    <div className="d-flex align-items-center">
                        <Image src={help_icon} alt="Descripción" width={32} height={32} rounded style={{ marginRight: '8px' }} /> 
                        <h6 style={{ fontSize: tamtexto*1.2 }}>Accesibilidad</h6>
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
                {idOperacionRetRap === -1 ? (
                            <>
                            <Card
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px'}}
                                >
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={reloj_arena} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>Disponible pronto</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>                              
                            </Card> 
                            </>   
                ):(
                    <>
                    <Card
                        onClick={() => handleCardClick_sub2_1(idOperacionRetRap)}
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
                                        <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{nombreRetRap} Personalizado       {termRetRap}{montoRetRap}</h7>
                                    </Row>
                                    <Row>
                                        <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{cuentaRetRap}</h7>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    </>
                    )}
                </Row>

                ): perfil_usuario === 'frecuente' ?(
                    <Row>
                    {idOperacionUltOP === -1 ? (
                            <>
                            <Card
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px'}}
                                >
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={reloj_arena} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>Disponible pronto</h7>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>                              
                            </Card> 
                            </>   
                    ):(
                        <>
                        <Card
                            onClick={() => handleCardClick_sub2_1(idOperacionUltOP)}
                            className="d-flex align-items-center"
                            style={{ width: '320px', height: '60px', cursor: 'pointer' }}
                        >                        
                            <Card.Body className="m-0 p-1">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <Image src={imgUltOP} alt="Descripción" width={40} height={40} />
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{nombreUltOP}        {termUltOP}{montoUltOP}</h7>
                                        </Row>
                                        <Row>
                                            <h7 className="m-0" style={{ fontSize: tamtexto*1.15 }}>{cuentaUltOP}</h7>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </>
                        )}
                    </Row>
                ):(    
                    <p></p>
                )}

            <div style={{ height: '8px' }} />        
            {/*AQUI VA LA SEGUNDA OPCION QUE VARIA POR PERFIL*/}
                    {perfil_usuario === 'senior' ? (
                     <>  
                        <div style={{ height: '10px' }} />   
                        <h4 style={{ fontSize: tamtexto*0.9 }}>Tamaño del texto</h4>
                        <Row>
                            <Form.Group>
                                <Form.Control
                                    as="select"
                                    onChange={handleOptionChange2}
                                    value={tamtexto}
                                    className="text-right form-control-sm"
                                >
                                    <option value="">Cambiar de tamaño de letra</option>
                                    <option value="13">Mediano</option>
                                    <option value="15">Grande</option>
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
                            customText={t('mensaje_gra1')}
                        />

                    ): perfil_usuario === 'frecuente' ?(
                        <Row>
                            <Card
                                className="d-flex align-items-center"
                                style={{ width: '320px', height: '60px'}}
                            >                        
                                <Card.Body className="m-0 p-1">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <Image src={otras} alt="Descripción" width={40} height={40} />
                                        </Col>
                                        <Col xs="auto">
                                            <Row>
                                                <h7 className="m-0"  style={{ fontSize: tamtexto*1.15 }}>{t('otras_operaciones')}</h7>
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