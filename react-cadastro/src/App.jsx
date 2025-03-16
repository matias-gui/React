import { BrowserRouter, Route, Routes, Navigate } from "react-router"
import Cadastro from './cadastro'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cadastro/>}/>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
