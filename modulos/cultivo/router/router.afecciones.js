import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postAfecciones, getAfecciones, getIdAfecciones, updateAfecciones } from "../controller/controller.afecciones.js";
const RouterAfecciones = Router();

RouterAfecciones.post(verificarToken, "/afecciones", postAfecciones);
RouterAfecciones.get(verificarToken, "/afecciones", getAfecciones);
RouterAfecciones.get(verificarToken, "/afecciones/:id", getIdAfecciones);
RouterAfecciones.put(verificarToken, "/afecciones/:id", updateAfecciones);

export default RouterAfecciones;
