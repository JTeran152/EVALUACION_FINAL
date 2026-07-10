function EventTable({
  eventos,
  eliminarEvento,
  editarEvento,
}) {
  if (eventos.length === 0) {
    return (
      <div className="text-center py-5">

        <i
          className="bi bi-calendar-x"
          style={{
            fontSize: "4rem",
            color: "#94a3b8",
          }}
        ></i>

        <h4 className="mt-3 text-dark">
          No hay eventos registrados
        </h4>

        <p className="text-secondary mb-0">
          Utiliza el formulario superior para crear el primer evento.
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

            <th>Fecha</th>

            <th>Lugar</th>

            <th className="text-center">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody>

          {eventos.map((evento) => (

            <tr key={evento.id}>

              <td>

                <strong>
                  {evento.nombre}
                </strong>

              </td>

              <td>{evento.fecha}</td>

              <td>{evento.lugar}</td>

              <td className="text-center">

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editarEvento(evento)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarEvento(evento.id)}
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

export default EventTable;