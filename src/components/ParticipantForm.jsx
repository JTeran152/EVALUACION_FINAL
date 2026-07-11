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
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (editando) {
          actualizarParticipante();
        } else {
          agregarParticipante();
        }
      }}
    >
      <div className="row">

        <div className="col-md-4 mb-3">

          <label className="form-label">
            Nombre completo
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Ej. Juan Pérez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>

        <div className="col-md-4 mb-3">

          <label className="form-label">
            Correo electrónico
          </label>

          <input
            type="email"
            className="form-control"
            placeholder="correo@ejemplo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

        </div>

        <div className="col-md-4 mb-3">

          <label className="form-label">
            Carrera
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Ej. Ingeniería de Sistemas"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
          />

        </div>

      </div>

      <div className="text-end mt-3">

        <button
          type="submit"
          className={`btn ${
            editando ? "btn-warning" : "btn-primary"
          } px-4`}
        >
          <i
            className={`bi ${
              editando
                ? "bi-pencil-square"
                : "bi-person-plus"
            } me-2`}
          ></i>

          {editando
            ? "Actualizar Participante"
            : "Guardar Participante"}

        </button>

      </div>

    </form>
  );
}

export default ParticipantForm;