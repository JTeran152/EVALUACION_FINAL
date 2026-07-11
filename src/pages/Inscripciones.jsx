import { useState, useEffect } from "react";
import InscriptionForm from "../components/InscriptionForm";
import { obtenerEventos } from "../services/eventService";
import { obtenerParticipantes } from "../services/participantService";
import {
  obtenerInscripciones,
  crearInscripcion,
  eliminarInscripcionAPI
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
//Inscripción Doble
  const yaExiste = inscripciones.some(
    (inscripcion) =>
      inscripcion.eventoId === eventoId &&
      inscripcion.participanteId === participanteId
  );

  if (yaExiste) {

    alert("Este participante ya está inscrito en ese evento.");

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
const eliminarInscripcion = async (id) => {

  try {

    await eliminarInscripcionAPI(id);
    await cargarDatos();

  } catch (error) {

    console.error(
      "Error al eliminar inscripción:",
      error
    );

  }

};

  return (

  <div className="container">

    <div className="card p-4 mb-4">

      <h2 className="text-dark mb-2">
        📝 Gestión de Inscripciones
      </h2>

      <p className="text-secondary mb-0">
        Administra las inscripciones de participantes a los eventos.
      </p>

    </div>

    <div className="card p-4 mb-4">

      <h4 className="text-dark mb-3">

        Registrar Inscripción

      </h4>

      <InscriptionForm

        eventos={eventos}
        participantes={participantes}

        eventoId={eventoId}
        setEventoId={setEventoId}

        participanteId={participanteId}
        setParticipanteId={setParticipanteId}

        registrarInscripcion={registrarInscripcion}

      />

    </div>

    <div className="card p-4">

      <h4 className="text-dark mb-4">

        Inscripciones Registradas

      </h4>

      <table className="table align-middle">

        <thead>

          <tr>

            <th>Evento</th>

            <th>Participante</th>

            <th className="text-center">
              Acciones
            </th>

          </tr>

        </thead>

        <tbody>

          {inscripciones.length === 0 ? (

            <tr>

              <td
                colSpan="3"
                className="text-center py-5 text-secondary"
              >

                <i
                  className="bi bi-journal-x d-block mb-3"
                  style={{
                    fontSize: "3rem",
                    color: "#94a3b8",
                  }}
                ></i>

                No existen inscripciones registradas.

              </td>

            </tr>

          ) : (

            inscripciones.map((inscripcion) => {

              const evento = eventos.find(
                (e) => e.id === inscripcion.eventoId
              );

              const participante = participantes.find(
                (p) => p.id === inscripcion.participanteId
              );

              return (

                <tr key={inscripcion.id}>

                  <td>

                    <strong>

                      {evento?.nombre}

                    </strong>

                  </td>

                  <td>

                    {participante?.nombre}

                  </td>

                  <td className="text-center">

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        eliminarInscripcion(inscripcion.id)
                      }
                      title="Eliminar"
                    >

                      <i className="bi bi-trash"></i>

                    </button>

                  </td>

                </tr>

              );

            })

          )}

        </tbody>

      </table>

    </div>

  </div>

);
}

export default Inscripciones;