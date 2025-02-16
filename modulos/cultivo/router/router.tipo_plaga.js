import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { postTipo_plaga, getTipo_plaga, getIdTipo_plaga, updateTipo_plaga } from "../controller/controller.tipo_plaga.js";
const RouterTipo_plaga = Router();

RouterTipo_plaga.post("/tipo_plaga",verificarToken, postTipo_plaga);
RouterTipo_plaga.get("/tipo_plaga",verificarToken, getTipo_plaga);
RouterTipo_plaga.get("/tipo_plaga/:id",verificarToken, getIdTipo_plaga);
RouterTipo_plaga.put("/tipo_plaga/:id",verificarToken, updateTipo_plaga);

export default RouterTipo_plaga;
