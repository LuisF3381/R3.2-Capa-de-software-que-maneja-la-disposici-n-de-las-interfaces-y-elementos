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
        <Route path="/principal/:idUsuario/:idUserModel" element={<MenuATM/>}/>

        {/*Retiro de efectivo*/}
        <Route path="/retiro/seleccion-cuenta/:idUsuario/:idUserModel" element={<SeleccionCuenta/>}/>
        <Route path="/retiro/seleccion-moneda/:idUsuario/:idUserModel/:CCI" element={<SeleccionMoneda/>}/>
        <Route path="/retiro/seleccion-monto/:idUserModel/:CCI/:moneda" element={<SeleccionMonto/>}/>
        <Route path="/retiro/finalizado/:idUserModel/:idTransaccion" element={<FinRetiro/>}/>

        {/*Deposito de efectivo*/}
        <Route path="/deposito/seleccion-cuenta/:idUsuario/:idUserModel" element={<SeleccionCuentaDeposito/>}/>
        <Route path="/deposito/seleccion-moneda/:idUsuario/:idUserModel/:CCI" element={<SeleccionMonedaDeposito/>}/>
        <Route path="/deposito/ingreso-billetes/:idUserModel/:CCI/:moneda" element={<DepositoEfectivo/>}/>
        <Route path="/deposito/resumen-deposito/:idUserModel/:CCI/:moneda" element={<ResumenDeposito/>}/>
        <Route path="/deposito/finalizado/:idUserModel/:idTransaccion" element={<FinDeposito/>}/>


        {/*Consulta de saldo*/}
        <Route path="/consulta/seleccion-cuenta/:idUsuario/:idUserModel" element={<SeleccionCuentaSaldo/>}/>
        <Route path="/consulta/finalizado/:idUserModel/:idTransaccion" element={<FinConsulta/>}/>


        {/*Fin de sesion*/}
        <Route path="/fin-sesion/:idTransaccion" element={<FinSesion/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
