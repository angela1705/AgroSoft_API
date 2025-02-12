import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTareas, getTareas, getIdTareas, updateTareas } from "../controller/controller.tareas.js";
const RouterTareas = Router();

RouterTareas.post(verificarToken, "/tareas", postTareas);
RouterTareas.get(verificarToken, "/tareas", getTareas);
RouterTareas.get(verificarToken, "/tareas/:id", getIdTareas);
RouterTareas.put(verificarToken, "/tareas/:id", updateTareas);

export default RouterTareas;
