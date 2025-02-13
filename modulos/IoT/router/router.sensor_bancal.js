import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postSensorBancal, getSensorBancal, IdSensorBancal, actualizarSensorBancal  } from "../controller/controller.sensor_bancal.js"; 
const RouterSensorBancal = Router();

RouterSensorBancal.post("/sensorbancal",verificarToken,postSensorBancal);
RouterSensorBancal.get("/sensorbancal",verificarToken, getSensorBancal);
RouterSensorBancal.get("/sensorbancal/:id",verificarToken, IdSensorBancal); 
RouterSensorBancal.put("/sensorbancal/:id",verificarToken, actualizarSensorBancal);
export default RouterSensorBancal;