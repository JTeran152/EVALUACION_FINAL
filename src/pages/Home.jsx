import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { obtenerEventos } from "../services/eventService";
import { obtenerParticipantes } from "../services/participantService";
import { obtenerInscripciones } from "../services/inscriptionService";

function Home() {

  const [totalEventos, setTotalEventos] = useState(0);
  const [totalParticipantes, setTotalParticipantes] = useState(0);
  const [totalInscripciones, setTotalInscripciones] = useState(0);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {

    try {

      const eventos = await obtenerEventos();
      const participantes = await obtenerParticipantes();
      const inscripciones = await obtenerInscripciones();

      setTotalEventos(eventos.data.length);
      setTotalParticipantes(participantes.data.length);
      setTotalInscripciones(inscripciones.data.length);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="container">

      <div className="card p-5 mb-5">

        <h1 className="text-dark mb-3">
          Bienvenido a EventManager
        </h1>

        <p
          className="lead text-secondary"
          style={{ maxWidth: "700px" }}
        >
          Administra eventos, participantes e inscripciones desde
          una única plataforma. Diseñado para ofrecer una gestión
          rápida, organizada y eficiente.
        </p>

        <div className="mt-3">

          <Link
            to="/eventos"
            className="btn btn-primary btn-lg"
          >
            <i className="bi bi-calendar-event me-2"></i>

            Gestionar Eventos

          </Link>

        </div>

      </div>


      <div className="row g-4">

        <div className="col-lg-4">

          <div className="card p-4 text-center h-100">

            <i
              className="bi bi-calendar-event text-primary"
              style={{ fontSize: "2.8rem" }}
            ></i>

            <h2
              className="text-dark mt-3"
            >
              {totalEventos}
            </h2>

            <p className="text-secondary mb-0">
              Eventos registrados
            </p>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="card p-4 text-center h-100">

            <i
              className="bi bi-people text-primary"
              style={{ fontSize: "2.8rem" }}
            ></i>

            <h2 className="text-dark mt-3">

              {totalParticipantes}

            </h2>

            <p className="text-secondary mb-0">

              Participantes registrados

            </p>

          </div>

        </div>

        <div className="col-lg-4">

          <div className="card p-4 text-center h-100">

            <i
              className="bi bi-journal-check text-primary"
              style={{ fontSize: "2.8rem" }}
            ></i>

            <h2 className="text-dark mt-3">

              {totalInscripciones}

            </h2>

            <p className="text-secondary mb-0">

              Inscripciones realizadas

            </p>

          </div>

        </div>

      </div>


      <div className="row mt-5 g-4">

        <div className="col-md-4">

          <Link
            to="/eventos"
            className="btn btn-light w-100 py-3"
          >

            📅 Gestionar Eventos

          </Link>

        </div>

        <div className="col-md-4">

          <Link
            to="/participantes"
            className="btn btn-light w-100 py-3"
          >

            👥 Gestionar Participantes

          </Link>

        </div>

        <div className="col-md-4">

          <Link
            to="/inscripciones"
            className="btn btn-light w-100 py-3"
          >

            📝 Gestionar Inscripciones

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Home;