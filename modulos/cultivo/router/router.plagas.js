import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postPlagas, getPlagas, getIdPlagas, updatePlagas } from "../controller/controller.plagas.js";
const RouterPlagas = Router();

RouterPlagas.post("/plagas",verificarToken, postPlagas);
RouterPlagas.get("/plagas",verificarToken, getPlagas);
RouterPlagas.get("/plagas/:id",verificarToken, getIdPlagas);
RouterPlagas.put("/plagas/:id",verificarToken, updatePlagas);

export default RouterPlagas;
