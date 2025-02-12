import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postTipo_especie, getTipo_especie, getIdTipo_especie, updateTipo_especie } from "../controller/controller.tipo_especie.js";
const RouterTipo_especie = Router();

RouterTipo_especie.post("/tipo_especie",verificarToken, postTipo_especie);
RouterTipo_especie.get("/tipo_especie",verificarToken, getTipo_especie);
RouterTipo_especie.get("/tipo_especie/:id",verificarToken, getIdTipo_especie);
RouterTipo_especie.put("/tipo_especie/:id",verificarToken, updateTipo_especie);

export default RouterTipo_especie;
