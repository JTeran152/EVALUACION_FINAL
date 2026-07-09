import EventForm from "../components/EventForm";
import EventTable from "../components/EventTable";
import { useState } from "react";

function Eventos() {
  // Lista inicial de eventos
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nombre: "Conferencia React",
      fecha: "20/07/2026",
      lugar: "Auditorio A",
    },
    {
      id: 2,
      nombre: "Taller de Inteligencia Artificial",
      fecha: "25/07/2026",
      lugar: "Laboratorio 3",
    },
  ]);

  // Datos del formulario
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  // Datos de edición
  const [editando, setEditando] = useState(false);
  const [eventoEditando, setEventoEditando] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // Agregar un nuevo evento
  const agregarEvento = () => {
    // Validación sencilla
    if (!nombre || !fecha || !lugar) {
      alert("Completa todos los campos.");
      return;
    }

    const nuevoEvento = {
      id: eventos.length + 1,
      nombre,
      fecha,
      lugar,
    };

    setEventos([...eventos, nuevoEvento]);

    // Limpiar formulario
    setNombre("");
    setFecha("");
    setLugar("");
  };

  // Eliminar un evento
  const eliminarEvento = (id) => {
    const eventosActualizados = eventos.filter(
      (evento) => evento.id !== id
    );

    setEventos(eventosActualizados);
  };
  
  //Editar Evento
  const editarEvento = (evento) => {
    setEditando(true);
    setEventoEditando(evento);

    setNombre(evento.nombre);
    setFecha(evento.fecha);
    setLugar(evento.lugar);
  };
  
  //Buscar Evento
  const eventosFiltrados = eventos.filter((evento) =>
    evento.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  //Actualizar Evento
  const actualizarEvento = () => {

    const eventosActualizados = eventos.map((evento) =>
      evento.id === eventoEditando.id
        ? {
            ...evento,
            nombre,
            fecha,
            lugar,
          }
        : evento
    );

  setEventos(eventosActualizados);

  // Limpiar formulario
  setNombre("");
  setFecha("");
  setLugar("");

  setEditando(false);
  setEventoEditando(null);
};

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestión de Eventos</h2>
      </div>

      {/* Formulario */}

      <EventForm
        nombre={nombre}
        setNombre={setNombre}
        fecha={fecha}
        setFecha={setFecha}
        lugar={lugar}
        setLugar={setLugar}
        agregarEvento={agregarEvento}
        actualizarEvento={actualizarEvento}
        editando={editando}
       />

      {/* Tabla */}
      <div className="mb-4">

        <label className="form-label">
          Buscar eventos
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Escribe el nombre del evento..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

      </div>

      <EventTable 
        eventos={eventosFiltrados}
        eliminarEvento={eliminarEvento}
        editarEvento={editarEvento}
      />

    </div>
  );
}

export default Eventos;