import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postAfecciones, getAfecciones, getIdAfecciones, updateAfecciones } from "../controller/controller.afecciones.js";
const RouterAfecciones = Router();

RouterAfecciones.post("/afecciones",verificarToken, postAfecciones);
RouterAfecciones.get("/afecciones",verificarToken, getAfecciones);
RouterAfecciones.get("/afecciones/:id",verificarToken, getIdAfecciones);
RouterAfecciones.put("/afecciones/:id",verificarToken, updateAfecciones);

export default RouterAfecciones;
