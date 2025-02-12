import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postCosechas, getCosechas, getIdCosechas, updateCosechas } from "../controller/controller.cosechas.js";
const RouterCosechas = Router();

RouterCosechas.post(verificarToken, "/cosechas", postCosechas);
RouterCosechas.get(verificarToken, "/cosechas", getCosechas);
RouterCosechas.get(verificarToken, "/cosechas/:id", getIdCosechas);
RouterCosechas.put(verificarToken, "/cosechas/:id", updateCosechas);

export default RouterCosechas;
