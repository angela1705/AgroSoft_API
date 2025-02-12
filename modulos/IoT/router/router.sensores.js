import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postSensores, getSensores, IdSensor, actualizarSensor  } from "../controller/controller.sensores.js";
const RouterSensor = Router();

RouterSensor.post("/sensor",verificarToken,postSensores);
RouterSensor.get("/sensor",verificarToken, getSensores);
RouterSensor.get("/sensor/:id",verificarToken, IdSensor);
RouterSensor.put("/sensor/:id_sensor",verificarToken, actualizarSensor);

export default RouterSensor;