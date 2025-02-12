import { Router } from "express";
import { postProgramacion, getProgramacion, getIdProgramacion, updateProgramacion } from "../controller/controller.programacion.js";
const RouterProgramacion = Router();

RouterProgramacion.post("/programacion", postProgramacion);
RouterProgramacion.get("/programacion", getProgramacion);
RouterProgramacion.get("/programacion/:id", getIdProgramacion);
RouterProgramacion.put("/programacion/:id", updateProgramacion);

export default RouterProgramacion;
