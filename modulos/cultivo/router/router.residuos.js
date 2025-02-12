import { Router } from "express";
import { postResiduos, getResiduos, getIdResiduos, updateResiduos } from "../controller/controller.residuos.js";
const RouterResiduos = Router();

RouterResiduos.post("/residuos", postResiduos);
RouterResiduos.get("/residuos", getResiduos);
RouterResiduos.get("/residuos/:id", getIdResiduos);
RouterResiduos.put("/residuos/:id", updateResiduos);

export default RouterResiduos;
