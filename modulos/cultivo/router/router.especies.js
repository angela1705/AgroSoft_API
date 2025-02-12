import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postEspecies, getEspecies, getIdEspecies, updateEspecies } from "../controller/controller.especies.js";
const RouterEspecies = Router();

RouterEspecies.post("/especies",verificarToken, postEspecies);
RouterEspecies.get("/especies",verificarToken, getEspecies);
RouterEspecies.get("/especies/:id",verificarToken, getIdEspecies);
RouterEspecies.put("/especies/:id",verificarToken, updateEspecies);

export default RouterEspecies;
