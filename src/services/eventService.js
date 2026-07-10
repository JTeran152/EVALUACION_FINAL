import api from "./api";

// Obtener todos los eventos
export const obtenerEventos = () => {
  return api.get("/eventos");
};

// Crear un evento
export const crearEvento = (evento) => {
  return api.post("/eventos", evento);
};

// Actualizar un evento
export const actualizarEventoAPI = (id, evento) => {
  return api.put(`/eventos/${id}`, evento);
};

// Eliminar un evento
export const eliminarEventoAPI = (id) => {
  return api.delete(`/eventos/${id}`);
};