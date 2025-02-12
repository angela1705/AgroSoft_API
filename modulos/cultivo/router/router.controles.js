import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postControles, getControles, getIdControles, updateControles } from "../controller/controller.controles.js";
const RouterControles = Router();

RouterControles.post("/controles",verificarToken, postControles);
RouterControles.get("/controles",verificarToken, getControles);
RouterControles.get("/controles/:id",verificarToken, getIdControles);
RouterControles.put("/controles/:id",verificarToken, updateControles);

export default RouterControles;
