import { useState, useEffect } from "react";
import InscriptionForm from "../components/InscriptionForm";
import { obtenerEventos } from "../services/eventService";
import { obtenerParticipantes } from "../services/participantService";
import Swal from "sweetalert2";
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

    Swal.fire({
      icon: "warning",
      title: "Campos incompletos",
      text: "Seleccione un evento y un participante.",
      confirmButtonColor: "#2563eb",
    });

    return;

  }
//Inscripción Doble
  const yaExiste = inscripciones.some(
    (inscripcion) =>
      inscripcion.eventoId === eventoId &&
      inscripcion.participanteId === participanteId
  );

  if (yaExiste) {

    Swal.fire({
      icon: "info",
      title: "Inscripción existente",
      text: "Este participante ya está inscrito en el evento seleccionado.",
      confirmButtonColor: "#2563eb",
    });

    return;

  }

  const nuevaInscripcion = {

    eventoId,
    participanteId,

  };

  try {

    await crearInscripcion(nuevaInscripcion);
    await cargarDatos();

    Swal.fire({
      icon: "success",
      title: "Inscripción registrada",
      text: "La inscripción se registró correctamente.",
      timer: 1800,
      showConfirmButton: false,
    });

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
  const resultado = await Swal.fire({
    title: "¿Eliminar inscripción?",
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#dc3545",
    cancelButtonColor: "#6c757d",
  });

if (!resultado.isConfirmed) return;

  try {

    await eliminarInscripcionAPI(id);
    await cargarDatos();

    Swal.fire({
      icon: "success",
      title: "Inscripción eliminada",
      timer: 1500,
      showConfirmButton: false,
    });

  } catch (error) {

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Ocurrió un problema al procesar la solicitud.",
      confirmButtonColor: "#dc3545",
    });

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