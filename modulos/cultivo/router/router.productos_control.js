import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postProductos_control, getProductos_control, getIdProductos_control, updateProductos_control } from "../controller/controller.productos_control.js";
const RouterProductos_control = Router();

RouterProductos_control.post(verificarToken, "/productos_control", postProductos_control);
RouterProductos_control.get(verificarToken, "/productos_control", getProductos_control);
RouterProductos_control.get(verificarToken, "/productos_control/:id", getIdProductos_control);
RouterProductos_control.put(verificarToken, "/productos_control/:id", updateProductos_control);

export default RouterProductos_control;
