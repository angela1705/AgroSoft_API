import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postPlantaciones, getPlantaciones, getIdPlantaciones, updatePlantaciones } from "../controller/controller.plantaciones.js";
const RouterPlantaciones = Router();

RouterPlantaciones.post("/plantaciones",verificarToken, postPlantaciones);
RouterPlantaciones.get("/plantaciones",verificarToken, getPlantaciones);
RouterPlantaciones.get("/plantaciones/:id",verificarToken, getIdPlantaciones);
RouterPlantaciones.put("/plantaciones/:id",verificarToken, updatePlantaciones);

export default RouterPlantaciones;
