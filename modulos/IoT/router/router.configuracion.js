import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postConfiguracion, getConfiguracion, IdConfiguracion, actualizarConfiguracion  } from "../controller/controller.configuraciones.js";
const RouterConfiguracion = Router();

RouterConfiguracion.post("/configuracion",verificarToken, postConfiguracion);
RouterConfiguracion.get("/configuracion",verificarToken, getConfiguracion);
RouterConfiguracion.get("/configuracion/:id",verificarToken, IdConfiguracion);
RouterConfiguracion.put("/configuracion/:id",verificarToken, actualizarConfiguracion);
export default RouterConfiguracion;