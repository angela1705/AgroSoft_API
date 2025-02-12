import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTipo_actividad, getTipo_actividad, getIdTipo_actividad, updateTipo_actividad } from "../controller/controller.tipo_actividad.js";
const RouterTipo_actividad = Router();

RouterTipo_actividad.post("/tipo_actividad", postTipo_actividad);
RouterTipo_actividad.get("/tipo_actividad", getTipo_actividad);
RouterTipo_actividad.get("/tipo_actividad/:id", getIdTipo_actividad);
RouterTipo_actividad.put("/tipo_actividad/:id", updateTipo_actividad);

export default RouterTipo_actividad;
