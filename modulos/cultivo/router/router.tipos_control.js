import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postTipos_control, getTipos_control, getIdTipos_control, updateTipos_control } from "../controller/controller.tipos_control.js";
const RouterTipos_control = Router();

RouterTipos_control.post("/tipos_control",verificarToken, postTipos_control);
RouterTipos_control.get("/tipos_control",verificarToken, getTipos_control);
RouterTipos_control.get("/tipos_control/:id",verificarToken, getIdTipos_control);
RouterTipos_control.put("/tipos_control/:id",verificarToken, updateTipos_control);

export default RouterTipos_control;
