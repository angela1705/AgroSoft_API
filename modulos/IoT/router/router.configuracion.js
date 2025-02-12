import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postConfiguracion, getConfiguracion, IdConfiguracion, actualizarConfiguracion  } from "../controller/controller.configuraciones.js";
const RouterConfiguracion = Router();

RouterConfiguracion.post("/configuracion",postConfiguracion);
RouterConfiguracion.get("/configuracion", getConfiguracion);
RouterConfiguracion.get("/configuracion/:id", IdConfiguracion);
RouterConfiguracion.put("/configuracion/:id",actualizarConfiguracion);

export default RouterConfiguracion;