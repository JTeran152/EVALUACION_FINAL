function ParticipantForm({
  nombre,
  setNombre,
  correo,
  setCorreo,
  carrera,
  setCarrera,
  agregarParticipante,
  actualizarParticipante,
  editando,
}) {
  return (
    <div className="card mb-4">

      <div className="card-header">
        Registrar Participante
      </div>

      <div className="card-body">

        <div className="mb-3">

          <label className="form-label">
            Nombre completo
          </label>

          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>


        <div className="mb-3">

          <label className="form-label">
            Correo electrónico
          </label>

          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

        </div>


        <div className="mb-3">

          <label className="form-label">
            Carrera
          </label>

          <input
            type="text"
            className="form-control"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
          />

        </div>


        <button
          className="btn btn-success"
          onClick={
            editando
              ? actualizarParticipante
              : agregarParticipante
          }
        >
          {
            editando
              ? "Guardar Cambios"
              : "Registrar Participante"
          }
        </button>


      </div>

    </div>
  );
}

export default ParticipantForm;