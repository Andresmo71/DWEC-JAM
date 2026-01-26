
import http from "./http-axios.js";

class ServicioProductos{
  getAll() {
    return http.get("/productos");
  }

  getId(id) {
    return http.get(`/productos/${id}`);
  }

  delete(id) {
    return http.delete(`/productos/${id}`);
  }

  update(id, data) {
    return http.put(`/productos/${id}`, data);
  }

}

export default new ServicioProductos();
