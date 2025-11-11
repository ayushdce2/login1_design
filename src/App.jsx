import { useState } from 'react'

import './App.css';
import Login from "./components/Login.jsx";
import ForgotPass from "./components/ForgotPass.jsx";
import Register from "./components/Register.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./components/assets/css/common.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/register"} element={<Register/>}/>
      <Route path={"/forgotpass"} element={<ForgotPass/>}/>
    </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
