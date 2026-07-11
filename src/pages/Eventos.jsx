import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventTable from "../components/EventTable";
import Swal from "sweetalert2";
import {
  obtenerEventos,
  crearEvento,
  actualizarEventoAPI,
  eliminarEventoAPI,
} from "../services/eventService";

function Eventos() {

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");

  const [editando, setEditando] = useState(false);
  const [eventoEditando, setEventoEditando] = useState(null);

  const [busqueda, setBusqueda] = useState("");

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    cargarEventos();
  }, []);

  const cargarEventos = async () => {
    try {
      const respuesta = await obtenerEventos();
      setEventos(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarEvento = async () => {

    if (!nombre || !fecha || !lugar) {

      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Complete todos los campos antes de continuar.",
        confirmButtonColor: "#2563eb",
      });

      return;

    }

    try {

      await crearEvento({
        nombre,
        fecha,
        lugar,
      });

      await cargarEventos();

      setNombre("");
      setFecha("");
      setLugar("");

    } catch (error) {

      console.error(error);

    }
    
    Swal.fire({
      icon: "success",
      title: "Evento registrado",
      text: "El evento fue registrado correctamente.",
      timer: 1800,
      showConfirmButton: false,
    });
  };

  const eliminarEvento = async (id) => {

    const resultado = await Swal.fire({
      title: "¿Eliminar evento?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    });

    if (!resultado.isConfirmed) {
      return;
    }

    try {

      await eliminarEventoAPI(id);

      await cargarEventos();

      Swal.fire({
        icon: "success",
        title: "Evento eliminado",
        timer: 1500,
        showConfirmButton: false,
      });

    } catch (error) {

      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el evento.",
      });

    }

  };

  const actualizarEvento = async () => {

    try {

      await actualizarEventoAPI(eventoEditando.id, {
        nombre,
        fecha,
        lugar,
      });

      await cargarEventos();

      setNombre("");
      setFecha("");
      setLugar("");

      setEventoEditando(null);

      setEditando(false);

    } catch (error) {

      console.error(error);

    }

    Swal.fire({
      icon: "success",
      title: "Evento actualizado",
      text: "Los cambios se guardaron correctamente.",
      timer: 1800,
      showConfirmButton: false,
    });
  };

  const editarEvento = (evento) => {

    setNombre(evento.nombre);
    setFecha(evento.fecha);
    setLugar(evento.lugar);
    setEventoEditando(evento);
    setEditando(true);

  };

  const eventosFiltrados = eventos.filter((evento) =>
    evento.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (

    <div className="container">

      <div className="card p-4 mb-4">

        <h2 className="text-dark mb-2">

          📅 Gestión de Eventos

        </h2>

        <p className="text-secondary mb-0">

          Administra todos los eventos registrados en el sistema.

        </p>

      </div>

      <div className="card p-4 mb-4">

        <h4 className="text-dark mb-3">

          {editando ? "Editar Evento" : "Registrar Evento"}

        </h4>

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

      </div>

      <div className="card p-4 mb-4">

        <label className="form-label fw-semibold">

          Buscar eventos

        </label>

        <div className="input-group">

          <span className="input-group-text">

            🔍

          </span>

          <input

            type="text"

            className="form-control"

            placeholder="Buscar por nombre..."

            value={busqueda}

            onChange={(e) => setBusqueda(e.target.value)}

          />

        </div>

      </div>

      <div className="card p-4">

        <h4 className="text-dark mb-4">

          Eventos Registrados

        </h4>

        <EventTable

          eventos={eventosFiltrados}

          eliminarEvento={eliminarEvento}

          editarEvento={editarEvento}

        />

      </div>

    </div>

  );

}

export default Eventos;