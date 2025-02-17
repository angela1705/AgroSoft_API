import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postTareas, getTareas, getIdTareas, updateTareas } from "../controller/controller.tareas.js";
const RouterTareas = Router();

RouterTareas.post("/tareas",verificarToken, postTareas);
RouterTareas.get("/tareas",verificarToken, getTareas);
RouterTareas.get("/tareas/:id",verificarToken, getIdTareas);
RouterTareas.put("/tareas/:id",verificarToken, updateTareas);

export default RouterTareas;
