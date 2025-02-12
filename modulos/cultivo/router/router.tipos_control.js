import { Router } from "express";
import { postTipos_control, getTipos_control, getIdTipos_control, updateTipos_control } from "../controller/controller.tipos_control.js";
const RouterTipos_control = Router();

RouterTipos_control.post("/tipos_control", postTipos_control);
RouterTipos_control.get("/tipos_control", getTipos_control);
RouterTipos_control.get("/tipos_control/:id", getIdTipos_control);
RouterTipos_control.put("/tipos_control/:id", updateTipos_control);

export default RouterTipos_control;
