function Footer() {

  return (

    <footer
      className="mt-5 py-4"
      style={{
        background: "rgba(15, 23, 42, 0.90)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
      }}
    >

      <div className="container text-center">

        <h4
          className="fw-bold mb-2"
          style={{ color: "#60a5fa" }}
        >
          📅 EventManager
        </h4>

        <p className="text-light mb-3">

          Sistema de Gestión de Eventos Académicos

        </p>

        <div
          className="d-flex justify-content-center flex-wrap gap-3 mb-3"
        >

          <span className="badge bg-primary p-2">
            ⚛ React
          </span>

          <span className="badge bg-success p-2">
            ⚡ Vite
          </span>

          <span className="badge bg-dark p-2">
            Bootstrap
          </span>

          <span className="badge bg-info text-dark p-2">
            Axios
          </span>

          <span className="badge bg-secondary p-2">
            JSON Server
          </span>

        </div>

        <small className="text-white-50">

          © 2026 EventManager · Proyecto académico desarrollado con React.

        </small>

      </div>

    </footer>

  );

}

export default Footer;