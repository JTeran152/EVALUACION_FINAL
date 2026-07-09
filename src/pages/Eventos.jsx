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
      />

      {/* Tabla */}

      <EventTable 
        eventos={eventos}
        eliminarEvento={eliminarEvento}
      />

    </div>
  );
}

export default Eventos;