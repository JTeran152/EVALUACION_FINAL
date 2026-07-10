import { useState, useEffect } from "react";
import InscriptionForm from "../components/InscriptionForm";
import { obtenerEventos } from "../services/eventService";
import { obtenerParticipantes } from "../services/participantService";
import {
  obtenerInscripciones,
  crearInscripcion,
  eliminarInscripcion
} from "../services/inscriptionService";

function Inscripciones() {

const [eventos, setEventos] = useState([]);
const [participantes, setParticipantes] = useState([]);
const [eventoId, setEventoId] = useState("");
const [participanteId, setParticipanteId] = useState("");
const [inscripciones, setInscripciones] = useState([]);

//Inscripciones
useEffect(() => {

  cargarDatos();

}, []);

const cargarDatos = async () => {

  try {

    const eventosAPI = await obtenerEventos();
    const participantesAPI = await obtenerParticipantes();
    const inscripcionesAPI = await obtenerInscripciones();

    setEventos(eventosAPI.data);
    setParticipantes(participantesAPI.data);
    setInscripciones(inscripcionesAPI.data);

  } catch (error) {

    console.error(error);

  }

};

//Registro de Inscripcion
const registrarInscripcion = async () => {

  if (!eventoId || !participanteId) {

    alert("Seleccione un evento y un participante.");

    return;

  }

  const nuevaInscripcion = {

    eventoId,
    participanteId,

  };

  try {

    await crearInscripcion(nuevaInscripcion);
    await cargarDatos();

    alert("Inscripción registrada correctamente.");

    setEventoId("");
    setParticipanteId("");

  } catch (error) {

    console.error(
      "Error al registrar inscripción:",
      error
    );

  }

};

//Eliminar Registro
const eliminarRegistro = async (id) => {

  try {

    await eliminarInscripcion(id);
    await cargarDatos();

  } catch (error) {

    console.error(
      "Error al eliminar inscripción:",
      error
    );

  }

};

  return (

    <div className="container mt-4">

      <h2>Gestión de Inscripciones</h2>

      <InscriptionForm
        eventos={eventos}
        participantes={participantes}

        eventoId={eventoId}
        setEventoId={setEventoId}

        participanteId={participanteId}
        setParticipanteId={setParticipanteId}

        registrarInscripcion={registrarInscripcion}

      />
      
      <table className="table mt-4">

      <thead>

      <tr>
      <th>Evento</th>
      <th>Participante</th>
      <th>Acción</th>
      </tr>

      </thead>


      <tbody>

      {inscripciones.map((inscripcion) => {

        const evento = eventos.find(
          (e) => e.id === inscripcion.eventoId
        );


       const participante = participantes.find(
         (p) => p.id === inscripcion.participanteId
        );


    return (

      <tr key={inscripcion.id}>

        <td>
          {evento?.nombre}
        </td>

        <td>
          {participante?.nombre}
        </td>

        <td>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => eliminarRegistro(inscripcion.id)}
        >
          Eliminar
        </button>

        </td>

      </tr>

    );

})}

</tbody>

</table>
    </div>

  );
}

export default Inscripciones;