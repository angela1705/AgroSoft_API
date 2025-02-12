import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { Router } from "express";
import { postTipo_especie, getTipo_especie, getIdTipo_especie, updateTipo_especie } from "../controller/controller.tipo_especie.js";
const RouterTipo_especie = Router();

RouterTipo_especie.post(verificarToken, "/tipo_especie", postTipo_especie);
RouterTipo_especie.get(verificarToken, "/tipo_especie", getTipo_especie);
RouterTipo_especie.get(verificarToken, "/tipo_especie/:id", getIdTipo_especie);
RouterTipo_especie.put(verificarToken, "/tipo_especie/:id", updateTipo_especie);

export default RouterTipo_especie;
