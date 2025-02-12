import { Router } from "express";
import { postBancal, getBancal, IdBancal, actualizarBancal } from "../controller/controller.bancal.js";
const RouterBancal = Router();

RouterBancal.post("/bancal", postBancal);
RouterBancal.get("/bancal", getBancal)
RouterBancal.get("/bancal/:id", IdBancal);
RouterBancal.put("/bancal/:id", actualizarBancal);

export default RouterBancal;