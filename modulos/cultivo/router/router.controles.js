import { Router } from "express";
import { postControles, getControles, getIdControles, updateControles } from "../controller/controller.controles.js";
const RouterControles = Router();

RouterControles.post("/controles", postControles);
RouterControles.get("/controles", getControles);
RouterControles.get("/controles/:id", getIdControles);
RouterControles.put("/controles/:id", updateControles);

export default RouterControles;
