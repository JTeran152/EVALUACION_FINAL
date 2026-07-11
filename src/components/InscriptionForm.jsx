function InscriptionForm({
  eventos,
  participantes,
  eventoId,
  setEventoId,
  participanteId,
  setParticipanteId,
  registrarInscripcion,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        registrarInscripcion();
      }}
    >
      <div className="row">

        <div className="col-md-5 mb-3">

          <label className="form-label">
            Evento
          </label>

          <select
            className="form-select"
            value={eventoId}
            onChange={(e) => setEventoId(e.target.value)}
          >
            <option value="">
              Seleccione un evento
            </option>

            {eventos.map((evento) => (
              <option
                key={evento.id}
                value={evento.id}
              >
                {evento.nombre}
              </option>
            ))}

          </select>

        </div>

        <div className="col-md-5 mb-3">

          <label className="form-label">
            Participante
          </label>

          <select
            className="form-select"
            value={participanteId}
            onChange={(e) =>
              setParticipanteId(e.target.value)
            }
          >
            <option value="">
              Seleccione un participante
            </option>

            {participantes.map((participante) => (
              <option
                key={participante.id}
                value={participante.id}
              >
                {participante.nombre}
              </option>
            ))}

          </select>

        </div>

        <div className="col-md-2 d-flex align-items-end">

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            <i className="bi bi-person-check me-2"></i>

            Registrar

          </button>

        </div>

      </div>

    </form>
  );
}

export default InscriptionForm;