import api from "./api";

// Obtener inscripciones
export const obtenerInscripciones = () => {
  return api.get("/inscripciones");
};

// Crear inscripción
export const crearInscripcion = (inscripcion) => {
  return api.post("/inscripciones", inscripcion);
};

// Eliminar inscripción
export const eliminarInscripcion = (id) => {
  return api.delete(`/inscripciones/${id}`);
};