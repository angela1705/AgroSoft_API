import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTipos_residuo, getTipos_residuo, getIdTipos_residuo, updateTipos_residuo } from "../controller/controller.tipos_residuo.js";
const RouterTipos_residuo = Router();

RouterTipos_residuo.post(verificarToken, "/tipos_residuo", postTipos_residuo);
RouterTipos_residuo.get(verificarToken, "/tipos_residuo", getTipos_residuo);
RouterTipos_residuo.get(verificarToken, "/tipos_residuo/:id", getIdTipos_residuo);
RouterTipos_residuo.put(verificarToken, "/tipos_residuo/:id", updateTipos_residuo);

export default RouterTipos_residuo;
