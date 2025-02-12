import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTipos_residuo, getTipos_residuo, getIdTipos_residuo, updateTipos_residuo } from "../controller/controller.tipos_residuo.js";
const RouterTipos_residuo = Router();

RouterTipos_residuo.post("/tipos_residuo", postTipos_residuo);
RouterTipos_residuo.get("/tipos_residuo", getTipos_residuo);
RouterTipos_residuo.get("/tipos_residuo/:id", getIdTipos_residuo);
RouterTipos_residuo.put("/tipos_residuo/:id", updateTipos_residuo);

export default RouterTipos_residuo;
