import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postControles, getControles, getIdControles, updateControles } from "../controller/controller.controles.js";
const RouterControles = Router();

RouterControles.post(verificarToken, "/controles", postControles);
RouterControles.get(verificarToken, "/controles", getControles);
RouterControles.get(verificarToken, "/controles/:id", getIdControles);
RouterControles.put(verificarToken, "/controles/:id", updateControles);

export default RouterControles;
