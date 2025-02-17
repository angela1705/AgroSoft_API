import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postProductos_control, getProductos_control, getIdProductos_control, updateProductos_control } from "../controller/controller.productos_control.js";
const RouterProductos_control = Router();

RouterProductos_control.post("/productos_control",verificarToken, postProductos_control);
RouterProductos_control.get("/productos_control",verificarToken, getProductos_control);
RouterProductos_control.get("/productos_control/:id",verificarToken, getIdProductos_control);
RouterProductos_control.put("/productos_control/:id",verificarToken, updateProductos_control);

export default RouterProductos_control;
