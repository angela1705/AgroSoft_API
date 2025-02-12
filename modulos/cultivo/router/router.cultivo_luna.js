import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postCultivo_luna, getCultivo_luna, getIdCultivo_luna, updateCultivo_luna } from "../controller/controller.cultivo_luna.js";
const RouterCultivo_luna = Router();

RouterCultivo_luna.post("/cultivo_luna",verificarToken, postCultivo_luna);
RouterCultivo_luna.get("/cultivo_luna",verificarToken, getCultivo_luna);
RouterCultivo_luna.get("/cultivo_luna/:id",verificarToken, getIdCultivo_luna);
RouterCultivo_luna.put("/cultivo_luna/:id",verificarToken, updateCultivo_luna);

export default RouterCultivo_luna;
