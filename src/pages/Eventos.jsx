import EventForm from "../components/EventForm";
import EventTable from "../components/EventTable";
import { useState, useEffect } from "react";
import {
  obtenerEventos,
  crearEvento,
  actualizarEventoAPI,
  eliminarEventoAPI
} from "../services/eventService";

function Eventos() {
  // Lista inicial de eventos
  const [eventos, setEventos] = useState([]);
  useEffect(() => {

    cargarEventos();

  }, []);

  const cargarEventos = async () => {

    try {

      const respuesta = await obtenerEventos();

      setEventos(respuesta.data);

    } catch (error) {

      console.error("Error al cargar eventos:", error);

    }

  };

  // Datos del formulario
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  // Datos de edición
  const [editando, setEditando] = useState(false);
  const [eventoEditando, setEventoEditando] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // Agregar un nuevo evento
  const agregarEvento = async () => {

    if (!nombre || !fecha || !lugar) {
      alert("Completa todos los campos.");
      return;
    }

    const nuevoEvento = {
      nombre,
      fecha,
      lugar,
    };

    try {

      await crearEvento(nuevoEvento);

      cargarEventos();

      setNombre("");
      setFecha("");
      setLugar("");

    } catch (error) {

      console.error("Error al crear evento:", error);

    }

  };

  // Eliminar un evento
  const eliminarEvento = async (id) => {

    try {

      await eliminarEventoAPI(id);

      cargarEventos();

    } catch (error) {

      console.error("Error al eliminar el evento:", error);

    }

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
  const actualizarEvento = async () => {

    const eventoActualizado = {

      nombre,
      fecha,
      lugar,

    };

    try {

      await actualizarEventoAPI(
        eventoEditando.id,
        eventoActualizado
      );

      cargarEventos();

      setNombre("");
      setFecha("");
      setLugar("");

      setEditando(false);
      setEventoEditando(null);

    } catch (error) {

      console.error("Error al actualizar el evento:", error);

    }

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