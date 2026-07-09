import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Sistema de Gestión de Eventos</h2>

      <hr />

      <Link to="/">Inicio</Link> |{" "}
      <Link to="/eventos">Eventos</Link> |{" "}
      <Link to="/participantes">Participantes</Link> |{" "}
      <Link to="/acerca">Acerca</Link>

      <hr />
    </nav>
  );
}

export default Navbar;