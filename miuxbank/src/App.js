import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import WelcomeScreen from './pages/welcomeScreen';
import PerfilPage from './pages/introduction/perfilPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Redirige a la pantalla de bienvenida del cajero*/}
        <Route path="" exact element={<Navigate to="/inicio"/>}/>
        <Route path="/inicio" element={<WelcomeScreen/>}/>
        {/*Pantallas de bienvenida al cajero*/}
        <Route path="/bienvenido/:idUserModel" element={<PerfilPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
