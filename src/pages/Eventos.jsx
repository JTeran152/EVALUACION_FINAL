import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventTable from "../components/EventTable";

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
      alert("Completa todos los campos.");
      return;
    }

    try {

      await crearEvento({
        nombre,
        fecha,
        lugar,
      });

      cargarEventos();

      setNombre("");
      setFecha("");
      setLugar("");

    } catch (error) {

      console.error(error);

    }

  };

  const eliminarEvento = async (id) => {

    try {

      await eliminarEventoAPI(id);

      cargarEventos();

    } catch (error) {

      console.error(error);

    }

  };

  const editarEvento = (evento) => {

    setNombre(evento.nombre);
    setFecha(evento.fecha);
    setLugar(evento.lugar);

    setEventoEditando(evento);

    setEditando(true);

  };

  const actualizarEvento = async () => {

    try {

      await actualizarEventoAPI(eventoEditando.id, {
        nombre,
        fecha,
        lugar,
      });

      cargarEventos();

      setNombre("");
      setFecha("");
      setLugar("");

      setEventoEditando(null);

      setEditando(false);

    } catch (error) {

      console.error(error);

    }

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