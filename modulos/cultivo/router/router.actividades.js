import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postActividades, getActividades, getIdActividades, updateActividades } from "../controller/controller.actividades.js";
const RouterActividades = Router();

RouterActividades.post(verificarToken, "/actividades", verificarToken, postActividades);
RouterActividades.get(verificarToken, "/actividades", verificarToken, getActividades);
RouterActividades.get(verificarToken, "/actividades/:id", verificarToken, getIdActividades);
RouterActividades.put(verificarToken, "/actividades/:id", verificarToken, updateActividades);

export default RouterActividades;
