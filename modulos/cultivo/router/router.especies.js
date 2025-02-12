import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postEspecies, getEspecies, getIdEspecies, updateEspecies } from "../controller/controller.especies.js";
const RouterEspecies = Router();

RouterEspecies.post(verificarToken, "/especies", postEspecies);
RouterEspecies.get(verificarToken, "/especies", getEspecies);
RouterEspecies.get(verificarToken, "/especies/:id", getIdEspecies);
RouterEspecies.put(verificarToken, "/especies/:id", updateEspecies);

export default RouterEspecies;
