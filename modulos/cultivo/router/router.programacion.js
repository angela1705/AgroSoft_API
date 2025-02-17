import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postProgramacion, getProgramacion, getIdProgramacion, updateProgramacion } from "../controller/controller.programacion.js";
const RouterProgramacion = Router();

RouterProgramacion.post("/programacion",verificarToken, postProgramacion);
RouterProgramacion.get("/programacion",verificarToken, getProgramacion);
RouterProgramacion.get("/programacion/:id",verificarToken, getIdProgramacion);
RouterProgramacion.put("/programacion/:id",verificarToken, updateProgramacion);

export default RouterProgramacion;
