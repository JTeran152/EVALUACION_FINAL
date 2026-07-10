import { useState, useEffect } from "react";
import ParticipantForm from "../components/ParticipantForm";
import ParticipantTable from "../components/ParticipantTable";

import {
  obtenerParticipantes,
  crearParticipante,
  actualizarParticipanteAPI,
  eliminarParticipanteAPI,
} from "../services/participantService";

function Participantes() {
  //Datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");

  //Datos de Edicion
  const [editando, setEditando] = useState(false);
  const [participanteEditando, setParticipanteEditando] = useState(null);

  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    cargarParticipantes();
  }, []);

  const cargarParticipantes = async () => {
    try {

      const respuesta = await obtenerParticipantes();

      setParticipantes(respuesta.data);

    } catch (error) {

      console.error("Error al cargar participantes:", error);

    }
  };

  const agregarParticipante = async () => {

    if (!nombre || !correo || !carrera) {
      alert("Completa todos los campos.");
      return;
    }
    
    const nuevoParticipante = {
      nombre,
      correo,
      carrera,
    };

    try {

      await crearParticipante(nuevoParticipante);

      cargarParticipantes();

      setNombre("");
      setCorreo("");
      setCarrera("");

    } catch (error) {

      console.error("Error al crear participante:", error);

    }

  };
  
  const editarParticipante = (participante) => {
    setNombre(participante.nombre);
    setCorreo(participante.correo);
    setCarrera(participante.carrera);

    setParticipanteEditando(participante);
    setEditando(true);
  };

  const eliminarParticipante = async (id) => {

    try {

      await eliminarParticipanteAPI(id);

      cargarParticipantes();

    } catch (error) {

      console.error("Error al eliminar participante:", error);

    }

  };

  const actualizarParticipante = async () => {

    const participanteActualizado = {
      nombre,
      correo,
      carrera,
    };

    try {

      await actualizarParticipanteAPI(
        participanteEditando.id,
        participanteActualizado
      );

      cargarParticipantes();

      setNombre("");
      setCorreo("");
      setCarrera("");

      setEditando(false);
      setParticipanteEditando(null);

    } catch (error) {

      console.error("Error al actualizar participante:", error);

    }

  };

  return (

    <div className="container mt-4">

      <h2>
        Gestión de Participantes
      </h2>


      <ParticipantForm

        nombre={nombre}
        setNombre={setNombre}

        correo={correo}
        setCorreo={setCorreo}

        carrera={carrera}
        setCarrera={setCarrera}

        agregarParticipante={agregarParticipante}
        actualizarParticipante={actualizarParticipante}
        editando={editando}

      />

      <ParticipantTable
        participantes={participantes}
        eliminarParticipante={eliminarParticipante}
        editarParticipante={editarParticipante}
      />

    </div>

  );
}


export default Participantes;