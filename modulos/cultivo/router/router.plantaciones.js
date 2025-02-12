import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postPlantaciones, getPlantaciones, getIdPlantaciones, updatePlantaciones } from "../controller/controller.plantaciones.js";
const RouterPlantaciones = Router();

RouterPlantaciones.post("/plantaciones", postPlantaciones);
RouterPlantaciones.get("/plantaciones", getPlantaciones);
RouterPlantaciones.get("/plantaciones/:id", getIdPlantaciones);
RouterPlantaciones.put("/plantaciones/:id", updatePlantaciones);

export default RouterPlantaciones;
