import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postProgramacion, getProgramacion, getIdProgramacion, updateProgramacion } from "../controller/controller.programacion.js";
const RouterProgramacion = Router();

RouterProgramacion.post(verificarToken, "/programacion", postProgramacion);
RouterProgramacion.get(verificarToken, "/programacion", getProgramacion);
RouterProgramacion.get(verificarToken, "/programacion/:id", getIdProgramacion);
RouterProgramacion.put(verificarToken, "/programacion/:id", updateProgramacion);

export default RouterProgramacion;
