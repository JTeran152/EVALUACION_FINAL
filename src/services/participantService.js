import api from "./api";

// Obtener participantes
export const obtenerParticipantes = () => {
  return api.get("/participantes");
};

// Crear participante
export const crearParticipante = (participante) => {
  return api.post("/participantes", participante);
};

// Actualizar participante
export const actualizarParticipanteAPI = (id, participante) => {
  return api.put(`/participantes/${id}`, participante);
};

// Eliminar participante
export const eliminarParticipanteAPI = (id) => {
  return api.delete(`/participantes/${id}`);
};