import { Router } from "express";
import { postSensorBancal, getSensorBancal, IdSensorBancal, actualizarSensorBancal  } from "../controller/controller.sensor_bancal.js"; 
const RouterSensorBancal = Router();

RouterSensorBancal.post("/sensorbancal",postSensorBancal);
RouterSensorBancal.get("/sensorbancal", getSensorBancal);
RouterSensorBancal.get("/sensorbancal/:id", IdSensorBancal); 
RouterSensorBancal.put("/sensorbancal/:id",actualizarSensorBancal);

export default RouterSensorBancal;