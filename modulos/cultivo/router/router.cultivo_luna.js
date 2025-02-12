import { Router } from "express";
import { postCultivo_luna, getCultivo_luna, getIdCultivo_luna, updateCultivo_luna } from "../controller/controller.cultivo_luna.js";
const RouterCultivo_luna = Router();

RouterCultivo_luna.post("/cultivo_luna", postCultivo_luna);
RouterCultivo_luna.get("/cultivo_luna", getCultivo_luna);
RouterCultivo_luna.get("/cultivo_luna/:id", getIdCultivo_luna);
RouterCultivo_luna.put("/cultivo_luna/:id", updateCultivo_luna);

export default RouterCultivo_luna;
