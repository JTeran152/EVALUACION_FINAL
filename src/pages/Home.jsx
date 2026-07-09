import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">

      <div className="text-center">

        <h1 className="display-4 fw-bold mb-3">
          Sistema de Gestión de Eventos Universitarios
        </h1>

        <p className="lead text-muted">
          Administra conferencias, talleres, seminarios y eventos
          académicos desde una única plataforma.
        </p>

        <Link to="/eventos" className="btn btn-primary btn-lg mt-3">
          Ver Eventos
        </Link>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">

          <div className="card shadow-sm">

            <div className="card-body text-center">

              <h4>📅 Eventos</h4>

              <p>
                Registra y administra todos los eventos académicos.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow-sm">

            <div className="card-body text-center">

              <h4>👥 Participantes</h4>

              <p>
                Gestiona estudiantes y docentes inscritos.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow-sm">

            <div className="card-body text-center">

              <h4>🎓 Universidad</h4>

              <p>
                Organiza conferencias, talleres y seminarios.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;