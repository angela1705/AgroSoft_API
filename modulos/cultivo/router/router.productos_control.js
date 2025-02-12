import { Router } from "express";
import { postProductos_control, getProductos_control, getIdProductos_control, updateProductos_control } from "../controller/controller.productos_control.js";
const RouterProductos_control = Router();

RouterProductos_control.post("/productos_control", postProductos_control);
RouterProductos_control.get("/productos_control", getProductos_control);
RouterProductos_control.get("/productos_control/:id", getIdProductos_control);
RouterProductos_control.put("/productos_control/:id", updateProductos_control);

export default RouterProductos_control;
