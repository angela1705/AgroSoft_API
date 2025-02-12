import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postFase_lunar, getFase_lunar, getIdFase_lunar, updateFase_lunar } from "../controller/controller.fase_lunar.js";
const RouterFase_lunar = Router();

RouterFase_lunar.post("/fase_lunar", postFase_lunar);
RouterFase_lunar.get("/fase_lunar", getFase_lunar);
RouterFase_lunar.get("/fase_lunar/:id", getIdFase_lunar);
RouterFase_lunar.put("/fase_lunar/:id", updateFase_lunar);

export default RouterFase_lunar;
