import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    // Define tus traducciones aquí
    qu: {
      translation: {
        login: 'Pakasqa llaveykita churay',
        rimender: 'Yaykuna rimayniykiqa pakallapim kachkan. Ama hukkuna qawananta saqiychu.',
        continue: 'QATIQ',
        exit: 'LLUQSICHIY',
        welcome: '¡Allin hamusqayki musuq perfilniykiman!',
        ocasional_descp: 'Cliente Ocasional hina clasificasqayku, ATM aswan allinta necesidadniykiman hina ruwakunqa',
        pres_func: 'Kunanqa kaykunatam chaskinki:',
        no_mostrar: 'Ama yapamanta qawachiychu',
        retiro_rapido: 'Utqaylla lluqsiy',
        fast_op_1: 'Utqaylla akllana',
        message_personalizado: 'Ichaqa manan chayllachu, ¡aswantaraqmi experienciaykita allichasaqku operacionniykiman hina!',
        cambio_texto: 'Qillqap sayayninta tikray',
        interfaz_simple: 'menú simplificado nisqa',
        senior_descp: 'Kuraq runa hina clasificasqayku, cajero automático aswan allinta necesidadniykiman hina ruwakunqa',
        frecuente_descp: 'Sapa kuti Cliente hina clasificasqayku, ATM aswan allinta necesidadniykiman hina ruwakunqa',
        last_operacion: 'Qhipa ruway',
        fast_op_2: 'Iskay utqaylla akllanakuna',
        //Corresponden al Menu Principal
        cerrar_sesion: 'LLUQSIY',
        operaciones_rapidas: 'Utqaylla llamkay',
        retiro_personalizado: 'Usqhayta qullqi',
        otras_operaciones: 'Huk operacionkuna',

        // Sobre presentacion
        que_quieres_hoy: '¿Imatataq kunan punchaw ruwayta munanki?',
        hola: 'Allinllachu',
        retiro: 'Qullqi hurquy',
        consulta: 'Qhaway kashaq qolqeta',
        deposito: 'Qullqi churay',

        // Mensajes agradecimiento
        mensaje_gra1: '¡ Kusikuy chay experiencia personalizada nisqawan!',

        // Flujo de retiro
        seleccion_cuentas_1: 'Huknin cuentaykita akllay',
        seleccion_cuentas_2: 'hinaspa lluqsiyta qallariy',
        regresar: 'KUTIY',
        billetes_disponibles: 'Boletos Disponibles nisqa',
        seleccion_moneda_retiro: 'hurqunapaq qullqita akllay',
        tipo_cambio: 'Tasa de cambio nisqa',
        retiro_soles: 'Qullqita suelakunapi',


      },
    },
    es: {
      translation: {
        login: 'Ingresa tu clave secreta',
        rimender: 'Tu clave es secreta. No permitas que otros la vean.',
        continue: 'CONTINUAR',
        exit: 'SALIR',
        welcome: '¡Bienvenido a tu nuevo perfil!',
        ocasional_descp: 'Te hemos clasificado como Cliente Ocasional, el cajero se adaptará mejor a tus necesidades',
        pres_func: 'Ahora cuentas con:',
        no_mostrar: 'No volver a mostrar',
        retiro_rapido: 'Retiro rapido',
        fast_op_1: 'Una opción rapida',
        message_personalizado: 'Pero eso no es todo, ¡ajustaremos aún mas tu experiencia en base a tus operaciones!',
        cambio_texto: 'Cambio de tamaño de texto',
        interfaz_simple: 'Interfaz simplificada',
        senior_descp: 'Te hemos clasificado como Cliente Senior, el cajero se adaptará mejor a tus necesidades',
        frecuente_descp: 'Te hemos clasificado como Cliente Frecuente, el cajero se adaptará mejor a tus necesidades',
        last_operacion: 'Ultima operacion',
        fast_op_2: 'Dos opciones rapidas',
        //Corresponden al Menu Principal
        cerrar_sesion: 'CERRAR SESION',

        // Para operaciones del perfil ocasional,
        operaciones_rapidas: 'Operaciones rapidas',
        retiro_personalizado: 'Retiro Personalizado',

        otras_operaciones: 'Otras operaciones',
        que_quieres_hoy: '¿Qué quieres hacer hoy?',
        hola: 'Hola',
        retiro: 'Retiro de efectivo',
        consulta: 'Consulta de saldo',
        deposito: 'Deposito de efectivo',

        mensaje_gra1: '¡ Gracias por usar el cajero, disfruta la experiencia personalizable !',

        // Flujo de retiro 
        //y comienza a retirar
        seleccion_cuentas_1: 'Selecciona una de tus cuentas',
        seleccion_cuentas_2: 'y comienza a retirar',

        regresar: 'REGRESAR',
        billetes_disponibles: 'Billetes Disponibles',

        seleccion_moneda_retiro: 'selecciona la moneda a retirar',
        tipo_cambio: 'Tipo de cambio',
        retiro_soles: 'Retiro soles',

      },
    },

  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
