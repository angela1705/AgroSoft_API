import { Router } from "express";
import { postTipo_especie, getTipo_especie, getIdTipo_especie, updateTipo_especie } from "../controller/controller.tipo_especie.js";
const RouterTipo_especie = Router();

RouterTipo_especie.post("/tipo_especie", postTipo_especie);
RouterTipo_especie.get("/tipo_especie", getTipo_especie);
RouterTipo_especie.get("/tipo_especie/:id", getIdTipo_especie);
RouterTipo_especie.put("/tipo_especie/:id", updateTipo_especie);

export default RouterTipo_especie;
