import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postCultivos, getCultivos, getIdCultivos, updateCultivos } from "../controller/controller.cultivos.js";
const RouterCultivos = Router();

RouterCultivos.post("/cultivos", postCultivos);
RouterCultivos.get("/cultivos", getCultivos);
RouterCultivos.get("/cultivos/:id", getIdCultivos);
RouterCultivos.put("/cultivos/:id", updateCultivos);

export default RouterCultivos;
