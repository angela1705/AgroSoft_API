import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postPlagas, getPlagas, getIdPlagas, updatePlagas } from "../controller/controller.plagas.js";
const RouterPlagas = Router();

RouterPlagas.post(verificarToken, "/plagas", postPlagas);
RouterPlagas.get(verificarToken, "/plagas", getPlagas);
RouterPlagas.get(verificarToken, "/plagas/:id", getIdPlagas);
RouterPlagas.put(verificarToken, "/plagas/:id", updatePlagas);

export default RouterPlagas;
