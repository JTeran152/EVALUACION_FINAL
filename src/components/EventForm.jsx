function EventForm({
  nombre,
  setNombre,
  fecha,
  setFecha,
  lugar,
  setLugar,
  agregarEvento,
  actualizarEvento,
  editando,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (editando) {
          actualizarEvento();
        } else {
          agregarEvento();
        }
      }}
    >
      <div className="row">

        <div className="col-md-4 mb-3">

          <label className="form-label">
            Nombre del evento
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Ej. Conferencia de React"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>

        <div className="col-md-4 mb-3">

          <label className="form-label">
            Fecha
          </label>

          <input
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

        </div>

        <div className="col-md-4 mb-3">

          <label className="form-label">
            Lugar
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Ej. Auditorio Principal"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
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
                : "bi-plus-circle"
            } me-2`}
          ></i>

          {editando
            ? "Actualizar Evento"
            : "Guardar Evento"}

        </button>

      </div>

    </form>
  );
}

export default EventForm;