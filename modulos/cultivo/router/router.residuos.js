import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postResiduos, getResiduos, getIdResiduos, updateResiduos } from "../controller/controller.residuos.js";
const RouterResiduos = Router();

RouterResiduos.post(verificarToken, "/residuos", postResiduos);
RouterResiduos.get(verificarToken, "/residuos", getResiduos);
RouterResiduos.get(verificarToken, "/residuos/:id", getIdResiduos);
RouterResiduos.put(verificarToken, "/residuos/:id", updateResiduos);

export default RouterResiduos;
