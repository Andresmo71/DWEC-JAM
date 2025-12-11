
import http from "./http-axios.js";

class ServicioProductos{
  getAll() {
    return http.get("/productos");
  }
  getId(id) {
    return http.get(`/productos/${id}`);
  }

  create(data) {
    return http.post("/admin", data);
  }

  update(id, data) {
    console.log(id,data)
    return http.put(`/admin/${id}`, data);
  }

  delete(id) {
    return http.delete(`/admin/${id}`);
  }

}

export default new ServicioProductos();
