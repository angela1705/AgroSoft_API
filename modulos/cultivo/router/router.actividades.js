import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postActividades, getActividades, getIdActividades, updateActividades } from "../controller/controller.actividades.js";
const RouterActividades = Router();

RouterActividades.post("/actividades", verificarToken, postActividades);
RouterActividades.get("/actividades", verificarToken, getActividades);
RouterActividades.get("/actividades/:id", verificarToken, getIdActividades);
RouterActividades.put("/actividades/:id", verificarToken, updateActividades);

export default RouterActividades;
