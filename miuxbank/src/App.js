import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import WelcomeScreen from './pages/welcomeScreen';
import PerfilPage from './pages/introduction/perfilPage';
import LoginPage from './pages/sesionLogin.jsx';
import MenuATM from './pages/menu/menuATM.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Redirige a la pantalla de bienvenida del cajero*/}
        <Route path="" exact element={<Navigate to="/inicio"/>}/>
        <Route path="/inicio" element={<WelcomeScreen/>}/>

        {/*Pantalla de Login LoginPage*/}
        <Route path="/login/:idUserModel" element={<LoginPage/>}/>

        {/*Pantallas de bienvenida al cajero*/}
        <Route path="/bienvenido/:idUserModel" element={<PerfilPage/>}/>

        {/*Menu principal del ATM*/}
        <Route path="/principal/:idUserModel" element={<MenuATM/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
