import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postTipos_residuo, getTipos_residuo, getIdTipos_residuo, updateTipos_residuo } from "../controller/controller.tipos_residuo.js";
const RouterTipos_residuo = Router();

RouterTipos_residuo.post("/tipos_residuo",verificarToken, postTipos_residuo);
RouterTipos_residuo.get("/tipos_residuo",verificarToken, getTipos_residuo);
RouterTipos_residuo.get("/tipos_residuo/:id",verificarToken, getIdTipos_residuo);
RouterTipos_residuo.put("/tipos_residuo/:id",verificarToken, updateTipos_residuo);

export default RouterTipos_residuo;
