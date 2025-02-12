import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postCultivo_luna, getCultivo_luna, getIdCultivo_luna, updateCultivo_luna } from "../controller/controller.cultivo_luna.js";
const RouterCultivo_luna = Router();

RouterCultivo_luna.post(verificarToken, "/cultivo_luna", postCultivo_luna);
RouterCultivo_luna.get(verificarToken, "/cultivo_luna", getCultivo_luna);
RouterCultivo_luna.get(verificarToken, "/cultivo_luna/:id", getIdCultivo_luna);
RouterCultivo_luna.put(verificarToken, "/cultivo_luna/:id", updateCultivo_luna);

export default RouterCultivo_luna;
