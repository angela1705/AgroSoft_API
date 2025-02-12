import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postAfecciones, getAfecciones, getIdAfecciones, updateAfecciones } from "../controller/controller.afecciones.js";
const RouterAfecciones = Router();

RouterAfecciones.post("/afecciones", postAfecciones);
RouterAfecciones.get("/afecciones", getAfecciones);
RouterAfecciones.get("/afecciones/:id", getIdAfecciones);
RouterAfecciones.put("/afecciones/:id", updateAfecciones);

export default RouterAfecciones;
