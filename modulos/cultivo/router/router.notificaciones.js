import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postNotificaciones, getNotificaciones, getIdNotificaciones, updateNotificaciones } from "../controller/controller.notificaciones.js";
const RouterNotificaciones = Router();

RouterNotificaciones.post("/notificaciones",verificarToken, postNotificaciones);
RouterNotificaciones.get("/notificaciones",verificarToken, getNotificaciones);
RouterNotificaciones.get("/notificaciones/:id",verificarToken, getIdNotificaciones);
RouterNotificaciones.put("/notificaciones/:id",verificarToken, updateNotificaciones);

export default RouterNotificaciones;
