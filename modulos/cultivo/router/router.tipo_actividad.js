import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTipo_actividad, getTipo_actividad, getIdTipo_actividad, updateTipo_actividad } from "../controller/controller.tipo_actividad.js";
const RouterTipo_actividad = Router();

RouterTipo_actividad.post(verificarToken, "/tipo_actividad", postTipo_actividad);
RouterTipo_actividad.get(verificarToken, "/tipo_actividad", getTipo_actividad);
RouterTipo_actividad.get(verificarToken, "/tipo_actividad/:id", getIdTipo_actividad);
RouterTipo_actividad.put(verificarToken, "/tipo_actividad/:id", updateTipo_actividad);

export default RouterTipo_actividad;
