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
import SeleccionCuentaSaldo from './pages/consulta_op/seleccionCuentaSaldo';
import FinConsulta from './pages/consulta_op/endConsulta';

// Para depositos
import SeleccionCuentaDeposito from './pages/deposito_op/selectionCuentaDeposito';
import SeleccionMonedaDeposito from './pages/deposito_op/selectionMonedaDeposito';

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
        <Route path="/bienvenido/:idUserModel" element={<PerfilPage/>}/>

        {/*Menu principal del ATM*/}
        <Route path="/principal/:idUserModel" element={<MenuATM/>}/>

        {/*Retiro de efectivo*/}
        <Route path="/retiro/seleccion-cuenta/:idUserModel" element={<SeleccionCuenta/>}/>
        <Route path="/retiro/seleccion-moneda/:idUserModel/:idCuenta" element={<SeleccionMoneda/>}/>
        <Route path="/retiro/seleccion-monto/:idUserModel/:idCuenta" element={<SeleccionMonto/>}/>
        <Route path="/retiro/finalizado/:idUserModel/:idTransaccion" element={<FinRetiro/>}/>

        {/*Deposito de efectivo*/}
        <Route path="/deposito/seleccion-cuenta/:idUserModel" element={<SeleccionCuentaDeposito/>}/>
        <Route path="/deposito/seleccion-moneda/:idUserModel/:idCuenta" element={<SeleccionMonedaDeposito/>}/>
        <Route path="/deposito/ingreso-billetes/:idUserModel/:idCuenta" element={<DepositoEfectivo/>}/>


        {/*Consulta de saldo*/}
        <Route path="/consulta/seleccion-cuenta/:idUserModel" element={<SeleccionCuentaSaldo/>}/>
        <Route path="/consulta/finalizado/:idTransaccion" element={<FinConsulta/>}/>



        {/*Fin de sesion*/}
        <Route path="/fin-sesion/" element={<FinSesion/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
