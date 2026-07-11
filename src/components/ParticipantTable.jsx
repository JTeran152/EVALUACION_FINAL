function ParticipantTable({
  participantes,
  eliminarParticipante,
  editarParticipante,
}) {

  if (participantes.length === 0) {

    return (

      <div className="text-center py-5">

        <i
          className="bi bi-people"
          style={{
            fontSize: "4rem",
            color: "#94a3b8",
          }}
        ></i>

        <h4 className="mt-3 text-dark">

          No hay participantes registrados

        </h4>

        <p className="text-secondary mb-0">

          Registra un participante utilizando el formulario superior.

        </p>

      </div>

    );

  }

  return (

    <div className="table-responsive">

      <table className="table align-middle">

        <thead>

          <tr>

            <th>Nombre</th>

            <th>Correo</th>

            <th>Carrera</th>

            <th className="text-center">

              Acciones

            </th>

          </tr>

        </thead>

        <tbody>

          {participantes.map((participante) => (

            <tr key={participante.id}>

              <td>

                <strong>

                  {participante.nombre}

                </strong>

              </td>

              <td>

                {participante.correo}

              </td>

              <td>

                {participante.carrera}

              </td>

              <td className="text-center">

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editarParticipante(participante)}
                  title="Editar"
                >

                  <i className="bi bi-pencil-square"></i>

                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    eliminarParticipante(participante.id)
                  }
                  title="Eliminar"
                >

                  <i className="bi bi-trash"></i>

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ParticipantTable;