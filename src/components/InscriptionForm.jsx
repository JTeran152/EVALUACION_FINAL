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
    <div className="card p-3 mb-4">

      <h4>Registrar Inscripción</h4>

      <div className="mb-3">

        <label className="form-label">
          Evento
        </label>

        <select
          className="form-select"
          value={eventoId}
          onChange={(e) => setEventoId(e.target.value)}
        >
          <option value="">Seleccione un evento</option>

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

      <div className="mb-3">

        <label className="form-label">
          Participante
        </label>

        <select
          className="form-select"
          value={participanteId}
          onChange={(e) => setParticipanteId(e.target.value)}
        >
          <option value="">Seleccione un participante</option>

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

      <button
        className="btn btn-primary"
        onClick={registrarInscripcion}
      >
        Inscribir
      </button>

    </div>
  );
}

export default InscriptionForm;