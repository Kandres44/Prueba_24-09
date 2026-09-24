

import Coleccion from "./componentes/coleccion"
import Favoritos from "./componentes/favoritos"
import Info from "./componentes/info"
import Inicio from "./componentes/inicio"
import Pokemon from "./componentes/pokemon"
import Usuario from "./componentes/usuario"

function App() {
    
  return (
      <>
      <Router>

        <nav classname="c-menu">
          <Link to="/">Inicio</Link>
          <Link to="/coleccion">Coleccion</Link>
          <Link to="/favorito">Favorito</Link>
          <Link to="/Info">Info</Link>
          <Link to="/usuario">User</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/coleccion" element={<Coleccion />} />
          <Route path="/favorito" element={<Favoritos />} />
          <Route path="/info" element={<Info />} />
          <Route path="/usuario" element={<Usuario />} />
        </Routes>
      </Router>
      </>
  )
}

export default App