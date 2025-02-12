import { Router } from "express";
import { postEspecies, getEspecies, getIdEspecies, updateEspecies } from "../controller/controller.especies.js";
const RouterEspecies = Router();

RouterEspecies.post("/especies", postEspecies);
RouterEspecies.get("/especies", getEspecies);
RouterEspecies.get("/especies/:id", getIdEspecies);
RouterEspecies.put("/especies/:id", updateEspecies);

export default RouterEspecies;
