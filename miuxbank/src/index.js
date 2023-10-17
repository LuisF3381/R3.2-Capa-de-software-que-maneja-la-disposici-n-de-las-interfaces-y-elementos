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
