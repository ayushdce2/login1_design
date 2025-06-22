import './components/assets/css/common.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ForgotPass from './components/ForgotPass';

function App() {
  return (
    
    <>

    <Routes>
      <Route path="/" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
      
    </Routes>

    </>
  );
}

export default App;
