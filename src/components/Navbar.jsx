import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{
        background: "rgba(15, 23, 42, 0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div className="container">

        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <div
            className="d-flex justify-content-center align-items-center me-3"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#2563eb,#1e3a8a)",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            <i className="bi bi-calendar-event"></i>
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.15rem",
                lineHeight: "1.1",
              }}
            >
              EventManager
            </div>

            <small
              style={{
                color: "#cbd5e1",
                fontSize: ".78rem",
              }}
            >
              Sistema de Gestión de Eventos
            </small>
          </div>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="menu"
        >
          <ul className="navbar-nav gap-lg-2">

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                <i className="bi bi-house-door me-2"></i>
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/eventos">
                <i className="bi bi-calendar-event me-2"></i>
                Eventos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/participantes">
                <i className="bi bi-people me-2"></i>
                Participantes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/inscripciones">
                <i className="bi bi-journal-check me-2"></i>
                Inscripciones
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/acerca">
                <i className="bi bi-info-circle me-2"></i>
                Acerca
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;