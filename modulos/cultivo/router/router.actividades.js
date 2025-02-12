import { Router } from "express";
import { postActividades, getActividades, getIdActividades, updateActividades } from "../controller/controller.actividades.js";
const RouterActividades = Router();

RouterActividades.post("/actividades", postActividades);
RouterActividades.get("/actividades", getActividades);
RouterActividades.get("/actividades/:id", getIdActividades);
RouterActividades.put("/actividades/:id", updateActividades);

export default RouterActividades;
