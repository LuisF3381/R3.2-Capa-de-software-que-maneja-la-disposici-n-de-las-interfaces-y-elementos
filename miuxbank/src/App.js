import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import WelcomeScreen from './pages/welcomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<WelcomeScreen/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
