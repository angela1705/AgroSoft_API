import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postTipoSensor, getTipoSensor, IdTipoSensor, actualizarTipoSensor } from "../controller/controller.tipo_sensor.js";

const RouterTipoSensor = Router();

RouterTipoSensor.post("/tiposensor", verificarToken, postTipoSensor);
RouterTipoSensor.get("/tiposensor", verificarToken, getTipoSensor);
RouterTipoSensor.get("/tiposensor/:id", verificarToken, IdTipoSensor);
RouterTipoSensor.put("/tiposensor/:id", verificarToken, actualizarTipoSensor);

export default RouterTipoSensor;