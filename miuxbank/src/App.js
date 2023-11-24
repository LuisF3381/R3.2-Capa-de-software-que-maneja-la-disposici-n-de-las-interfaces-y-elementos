import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import WelcomeScreen from './pages/welcomeScreen';
import PerfilPage from './pages/introduction/perfilPage';
import LoginPage from './pages/sesionLogin.jsx';
import MenuATM from './pages/menu/menuATM.jsx'

// Para retiro 
import SeleccionCuenta from './pages/retiro_op/selectionCuenta.jsx'
import SeleccionMoneda from './pages/retiro_op/selectionMoneda';
import SeleccionMonto from './pages/retiro_op/selectionMonto';
import FinRetiro from './pages/retiro_op/endRetiro';

// Para deposito
import DepositoEfectivo from './pages/deposito_op/depositoEfectivo';
import SeleccionCuentaDeposito from './pages/deposito_op/selectionCuentaDeposito';
import SeleccionMonedaDeposito from './pages/deposito_op/selectionMonedaDeposito';
import ResumenDeposito from './pages/deposito_op/depositoResumen';
import FinDeposito from './pages/deposito_op/endDeposito';

// Para consulta
import SeleccionCuentaSaldo from './pages/consulta_op/seleccionCuentaSaldo';
import FinConsulta from './pages/consulta_op/endConsulta';


// Fin de sesion
import FinSesion from './pages/endSesion';


import 'bootstrap/dist/css/bootstrap.min.css';
import Login_intermediate from './pages/intermediate/login_intermediate.jsx';
import PantallaIntermedia from './pages/intermediate/login_intermediate.jsx';
import Retiro_intermediate from './pages/intermediate/retiro_intermediate.jsx';
import Consulta_intermediate from './pages/intermediate/consulta_intermediate.jsx';
import Deposito2_intermediate from './pages/intermediate/deposito2_intermediate.jsx';
import Deposito1_intermediate from './pages/intermediate/deposito1_intermediate.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Redirige a la pantalla de bienvenida del cajero*/}
        <Route path="" exact element={<Navigate to="/inicio"/>}/>
        <Route path="/inicio" element={<WelcomeScreen/>}/>

        {/*Pantalla de Login LoginPage*/}
        <Route path="/login/:idUsuario" element={<LoginPage/>}/>

        {/*Pantallas de bienvenida al cajero*/}
        <Route path="/bienvenido/:idUsuario/:idUserModel" element={<PerfilPage/>}/>

        {/*Menu principal del ATM*/}
        <Route path="/principal/:idUsuario/:idUserModel" element={<MenuATM/>}/> {/*Listo*/}

        {/*Retiro de efectivo*/}
{/*Listo*/}        <Route path="/retiro/seleccion-cuenta/:idUsuario/:idUserModel" element={<SeleccionCuenta/>}/> 
{/*Listo*/}        <Route path="/retiro/seleccion-moneda/:idUsuario/:idUserModel/:CCI" element={<SeleccionMoneda/>}/>
{/*Listo*/}        <Route path="/retiro/seleccion-monto/:idUserModel/:CCI/:moneda/:idOperation?" element={<SeleccionMonto/>}/>
{/*Listo*/}        <Route path="/retiro/finalizado/:idUserModel/:idTransaccion/:idOperation?" element={<FinRetiro/>}/>

        {/*Deposito de efectivo*/}
{/*Listo*/}          <Route path="/deposito/seleccion-cuenta/:idUsuario/:idUserModel" element={<SeleccionCuentaDeposito/>}/>
{/*Listo*/}          <Route path="/deposito/seleccion-moneda/:idUsuario/:idUserModel/:CCI" element={<SeleccionMonedaDeposito/>}/>
{/*Evaluar si esta listo*/}        <Route path="/deposito/ingreso-billetes/:idUserModel/:CCI/:moneda/:idOperation?" element={<DepositoEfectivo/>}/>
{/*Listo*/}       <Route path="/deposito/resumen-deposito/:idUserModel/:CCI/:moneda/:idOperation?" element={<ResumenDeposito/>}/>
{/*Listo*/}          <Route path="/deposito/finalizado/:idUserModel/:idTransaccion/:idOperation?" element={<FinDeposito/>}/>


        {/*Consulta de saldo*/}
        <Route path="/consulta/seleccion-cuenta/:idUsuario/:idUserModel/:idOperation?" element={<SeleccionCuentaSaldo/>}/>
        <Route path="/consulta/finalizado/:idUserModel/:idTransaccion" element={<FinConsulta/>}/>


        {/*Fin de sesion*/}
        <Route path="/fin-sesion/:idTransaccion/:idUserModel" element={<FinSesion/>}/>

        {/*Pantallas intermedias*/}
        <Route path="/login_intermedia" element={<PantallaIntermedia/>}/> 
        <Route path="/retiro_intermedia" element={<Retiro_intermediate/>}/> 
        <Route path="/consulta_intermedia" element={<Consulta_intermediate/>}/> 
        <Route path="/deposito1_intermedia" element={<Deposito1_intermediate/>}/> 
        <Route path="/deposito2_intermedia" element={<Deposito2_intermediate/>}/> 


      </Routes>
    </BrowserRouter>
  );
}

export default App;
