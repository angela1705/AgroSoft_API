import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTipo_plaga, getTipo_plaga, getIdTipo_plaga, updateTipo_plaga } from "../controller/controller.tipo_plaga.js";
const RouterTipo_plaga = Router();

RouterTipo_plaga.post("/tipo_plaga", postTipo_plaga);
RouterTipo_plaga.get("/tipo_plaga", getTipo_plaga);
RouterTipo_plaga.get("/tipo_plaga/:id", getIdTipo_plaga);
RouterTipo_plaga.put("/tipo_plaga/:id", updateTipo_plaga);

export default RouterTipo_plaga;
