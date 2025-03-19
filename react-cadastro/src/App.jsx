import { BrowserRouter, Route, Routes, Navigate } from "react-router"
import Cadastro from './cadastro'
import Login from "./login"
import esqueceusenha from "./esqueceusenha"
import Esqueceusenha from "./esqueceusenha"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cadastro/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Esqueceusenha" element={<Esqueceusenha/>}/>
    </Routes> 
   
   </BrowserRouter>
  )
}

export default App
