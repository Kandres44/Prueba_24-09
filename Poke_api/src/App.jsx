import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';

import inicio from "./componentes/inicio";
import favoritos from "./componentes/favoritos";
import info from "./componentes/info";
import coleccion from "./componentes/coleccion"
import usuario from "./componentes/usuario"
import pokemon from "./componentes/pokemon"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <nav className='c-menu'>
          <Link to="/">inicio</Link>
          <Link to="/coleccion">coleccion</Link>
          <Link to="/favoritos">favoritos</Link>
          <Link to="/info">info</Link>
          <Link to="/usuario">usuario</Link>
        </nav>
        <Routes>
          <Route path="/" element={<inicio />} />
          <Route path="/favoritos" element={<favoritos />} />
          <Route path="/coleccion" element={<coleccion />} />
          <Route path="/info" element={<info />} />
          <Route path="/usuario" element={<usuario />} />
          <Route path="/pokemon/:name" element={<pokemon />} />
        </Routes>
      </Router>
    </>
  )
}

export default App