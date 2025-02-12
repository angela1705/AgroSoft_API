import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postResiduos, getResiduos, getIdResiduos, updateResiduos } from "../controller/controller.residuos.js";
const RouterResiduos = Router();

RouterResiduos.post("/residuos",verificarToken, postResiduos);
RouterResiduos.get("/residuos",verificarToken, getResiduos);
RouterResiduos.get("/residuos/:id",verificarToken, getIdResiduos);
RouterResiduos.put("/residuos/:id",verificarToken, updateResiduos);

export default RouterResiduos;
