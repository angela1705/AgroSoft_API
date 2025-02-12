import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postCosechas, getCosechas, getIdCosechas, updateCosechas } from "../controller/controller.cosechas.js";
const RouterCosechas = Router();

RouterCosechas.post("/cosechas", postCosechas);
RouterCosechas.get("/cosechas", getCosechas);
RouterCosechas.get("/cosechas/:id", getIdCosechas);
RouterCosechas.put("/cosechas/:id", updateCosechas);

export default RouterCosechas;
