import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postNotificaciones, getNotificaciones, getIdNotificaciones, updateNotificaciones } from "../controller/controller.notificaciones.js";
const RouterNotificaciones = Router();

RouterNotificaciones.post("/notificaciones", postNotificaciones);
RouterNotificaciones.get("/notificaciones", getNotificaciones);
RouterNotificaciones.get("/notificaciones/:id", getIdNotificaciones);
RouterNotificaciones.put("/notificaciones/:id", updateNotificaciones);

export default RouterNotificaciones;
