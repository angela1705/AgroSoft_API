import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postCultivos, getCultivos, getIdCultivos, updateCultivos } from "../controller/controller.cultivos.js";
const RouterCultivos = Router();

RouterCultivos.post(verificarToken, "/cultivos", postCultivos);
RouterCultivos.get(verificarToken, "/cultivos", getCultivos);
RouterCultivos.get(verificarToken, "/cultivos/:id", getIdCultivos);
RouterCultivos.put(verificarToken, "/cultivos/:id", updateCultivos);

export default RouterCultivos;
