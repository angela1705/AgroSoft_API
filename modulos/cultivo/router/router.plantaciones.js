import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postPlantaciones, getPlantaciones, getIdPlantaciones, updatePlantaciones } from "../controller/controller.plantaciones.js";
const RouterPlantaciones = Router();

RouterPlantaciones.post(verificarToken, "/plantaciones", postPlantaciones);
RouterPlantaciones.get(verificarToken, "/plantaciones", getPlantaciones);
RouterPlantaciones.get(verificarToken, "/plantaciones/:id", getIdPlantaciones);
RouterPlantaciones.put(verificarToken, "/plantaciones/:id", updatePlantaciones);

export default RouterPlantaciones;
