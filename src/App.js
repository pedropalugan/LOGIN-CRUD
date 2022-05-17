import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Home from './components/Home'
import Atualizar from './components/Atualizar/Index'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path='/atualizar' element={<Atualizar />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
