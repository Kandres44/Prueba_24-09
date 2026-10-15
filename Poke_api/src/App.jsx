import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';

import inicio from "./components/inicio";
import favoritos from "./components/favoritos";
import info from "./components/info";
import coleccion from "./components/coleccion"
import usuario from "./components/usuario"
import pokemon from "./components/pokemon"
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