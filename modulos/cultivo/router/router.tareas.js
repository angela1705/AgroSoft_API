import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTareas, getTareas, getIdTareas, updateTareas } from "../controller/controller.tareas.js";
const RouterTareas = Router();

RouterTareas.post("/tareas", postTareas);
RouterTareas.get("/tareas", getTareas);
RouterTareas.get("/tareas/:id", getIdTareas);
RouterTareas.put("/tareas/:id", updateTareas);

export default RouterTareas;
