import { useState } from "react";
import ParticipantForm from "../components/ParticipantForm";
import ParticipantTable from "../components/ParticipantTable";


function Participantes() {
  //Datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");

  //Datos de Edicion
  const [editando, setEditando] = useState(false);
  const [participanteEditando, setParticipanteEditando] = useState(null);

  const [participantes, setParticipantes] = useState([]);


  const agregarParticipante = () => {

    if (!nombre || !correo || !carrera) {
      alert("Completa todos los campos.");
      return;
    }


    const nuevoParticipante = {
      id: participantes.length + 1,
      nombre,
      correo,
      carrera,
    };


    setParticipantes([
      ...participantes,
      nuevoParticipante
    ]);


    setNombre("");
    setCorreo("");
    setCarrera("");

  };

  const eliminarParticipante = (id) => {

    const participantesActualizados = participantes.filter(
      (participante) => participante.id !== id
    );

    setParticipantes(participantesActualizados);

  };
  
  const editarParticipante = (participante) => {

    setEditando(true);
    setParticipanteEditando(participante);

    setNombre(participante.nombre);
    setCorreo(participante.correo);
    setCarrera(participante.carrera);

  };

  const actualizarParticipante = () => {

    const participantesActualizados = participantes.map(
      (participante) =>
        participante.id === participanteEditando.id
          ? {
              ...participante,
              nombre,
              correo,
              carrera,
            }
          : participante
  );


  setParticipantes(participantesActualizados);


  // Limpiar formulario

  setNombre("");
  setCorreo("");
  setCarrera("");

  setEditando(false);
  setParticipanteEditando(null);

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