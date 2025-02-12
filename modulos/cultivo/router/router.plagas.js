import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postPlagas, getPlagas, getIdPlagas, updatePlagas } from "../controller/controller.plagas.js";
const RouterPlagas = Router();

RouterPlagas.post("/plagas", postPlagas);
RouterPlagas.get("/plagas", getPlagas);
RouterPlagas.get("/plagas/:id", getIdPlagas);
RouterPlagas.put("/plagas/:id", updatePlagas);

export default RouterPlagas;
