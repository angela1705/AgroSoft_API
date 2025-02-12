import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postCosechas, getCosechas, getIdCosechas, updateCosechas } from "../controller/controller.cosechas.js";
const RouterCosechas = Router();

RouterCosechas.post("/cosechas",verificarToken, postCosechas);
RouterCosechas.get("/cosechas",verificarToken, getCosechas);
RouterCosechas.get("/cosechas/:id",verificarToken, getIdCosechas);
RouterCosechas.put("/cosechas/:id",verificarToken, updateCosechas);

export default RouterCosechas;
