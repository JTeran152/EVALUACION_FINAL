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
    <div className="card mb-4">
      <div className="card-header">
        Registrar Nuevo Evento
      </div>

      <div className="card-body">

        <div className="mb-3">
          <label className="form-label">
            Nombre del evento
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
            Fecha
          </label>

          <input
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Lugar
          </label>

          <input
            type="text"
            className="form-control"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success"
          onClick={editando ? actualizarEvento : agregarEvento}
        >
          {editando ? "Guardar Cambios" : "Agregar Evento"}
        </button>

      </div>
    </div>
  );
}

export default EventForm;