function ParticipantTable({
  participantes,
  eliminarParticipante,
  editarParticipante
}) {
  return (
    <table className="table table-striped table-bordered">

      <thead className="table-primary">

        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Carrera</th>
          <th>Acciones</th>
        </tr>

      </thead>


      <tbody>

        {participantes.map((participante) => (

          <tr key={participante.id}>

            <td>{participante.nombre}</td>

            <td>{participante.correo}</td>

            <td>{participante.carrera}</td>

            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editarParticipante(participante)}
              >
                Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarParticipante(participante.id)}
              >
                Eliminar
              </button>

            </td>

          </tr>

        ))}

      </tbody>


    </table>
  );
}

export default ParticipantTable;