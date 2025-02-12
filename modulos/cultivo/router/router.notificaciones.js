import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postNotificaciones, getNotificaciones, getIdNotificaciones, updateNotificaciones } from "../controller/controller.notificaciones.js";
const RouterNotificaciones = Router();

RouterNotificaciones.post(verificarToken, "/notificaciones", postNotificaciones);
RouterNotificaciones.get(verificarToken, "/notificaciones", getNotificaciones);
RouterNotificaciones.get(verificarToken, "/notificaciones/:id", getIdNotificaciones);
RouterNotificaciones.put(verificarToken, "/notificaciones/:id", updateNotificaciones);

export default RouterNotificaciones;
