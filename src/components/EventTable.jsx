function EventTable({ eventos, eliminarEvento }) {
  return (
    <table className="table table-striped table-bordered">

      <thead className="table-primary">
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Lugar</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>

        {eventos.map((evento) => (

          <tr key={evento.id}>

            <td>{evento.nombre}</td>
            <td>{evento.fecha}</td>
            <td>{evento.lugar}</td>

            <td>
              <button className="btn btn-warning btn-sm me-2">
                Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarEvento(evento.id)}
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

export default EventTable;