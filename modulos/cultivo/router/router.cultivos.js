import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postCultivos, getCultivos, getIdCultivos, updateCultivos } from "../controller/controller.cultivos.js";
const RouterCultivos = Router();

RouterCultivos.post("/cultivos",verificarToken, postCultivos);
RouterCultivos.get("/cultivos",verificarToken, getCultivos);
RouterCultivos.get("/cultivos/:id",verificarToken, getIdCultivos);
RouterCultivos.put("/cultivos/:id",verificarToken, updateCultivos);

export default RouterCultivos;
