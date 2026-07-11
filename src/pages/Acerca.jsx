import React from "react";

function Acerca() {
  return (

    <div className="container">

      <div className="card p-5 mb-4 text-center">

        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "90px",
            height: "90px",
            background: "#2563eb",
            color: "#fff",
            fontSize: "2.5rem",
          }}
        >
          <i className="bi bi-calendar-event"></i>
        </div>

        <h2 className="fw-bold text-dark">

          Acerca de EventManager

        </h2>

        <p className="text-secondary mt-3">

          EventManager es una aplicación web desarrollada para facilitar la
          administración de eventos, participantes e inscripciones mediante una
          interfaz moderna, intuitiva y conectada a una API REST local.

        </p>

      </div>

      <div className="row g-4">

        <div className="col-md-6">

          <div className="card h-100 p-4">

            <h4 className="fw-bold text-dark mb-3">

               Funcionalidades

            </h4>

            <ul className="list-group list-group-flush">

              <li className="list-group-item">
                📅 Gestión completa de eventos
              </li>

              <li className="list-group-item">
                👥 Administración de participantes
              </li>

              <li className="list-group-item">
                📝 Registro de inscripciones
              </li>

              <li className="list-group-item">
                🔍 Búsqueda rápida de eventos
              </li>

              <li className="list-group-item">
                💾 Persistencia de datos mediante API REST
              </li>

            </ul>

          </div>

        </div>

        <div className="col-md-6">

          <div className="card h-100 p-4">

            <h4 className="fw-bold text-dark mb-3">

               Tecnologías

            </h4>

            <div className="d-flex flex-wrap gap-2">

              <span className="badge bg-primary fs-6">
                React
              </span>

              <span className="badge bg-success fs-6">
                Vite
              </span>

              <span className="badge bg-dark fs-6">
                Bootstrap 5
              </span>

              <span className="badge bg-info text-dark fs-6">
                Axios
              </span>

              <span className="badge bg-secondary fs-6">
                JSON Server
              </span>

            </div>

            <hr />

            <h5 className="fw-bold">

              🎯 Objetivo

            </h5>

            <p className="text-secondary mb-0">

              Proporcionar una plataforma sencilla y eficiente para gestionar
              eventos académicos, optimizando el registro de participantes y el
              control de las inscripciones.

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Acerca;