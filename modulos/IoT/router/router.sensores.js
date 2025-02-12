import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postSensores, getSensores, IdSensor, actualizarSensor  } from "../controller/controller.sensores.js";
const RouterSensor = Router();

RouterSensor.post("/sensor",postSensores);
RouterSensor.get("/sensor", getSensores);
RouterSensor.get("/sensor/:id", IdSensor);
RouterSensor.put("/sensor/:id_sensor",actualizarSensor);

export default RouterSensor;