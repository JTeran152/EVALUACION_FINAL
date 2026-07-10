import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Gestión de Eventos
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/eventos">
            Eventos
          </Link>

          <Link className="nav-link" to="/participantes">
            Participantes
          </Link>

          <Link className="nav-link" to="/acerca">
            Acerca
          </Link>

          <Link as={Link} to="/inscripciones">
            Inscripciones
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;