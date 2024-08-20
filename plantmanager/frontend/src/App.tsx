import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

//Routes
import Home from './routes/home';
import Cadastro from './routes/Cadastro';
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"



function App() {
  
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path='/cadastro' element ={<Cadastro/>} />
         <Route path='/login' element ={<Login/>} />
         <Route path = "/dashboard" element = {<Dashboard/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
