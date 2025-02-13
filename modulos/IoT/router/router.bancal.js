import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postBancal, getBancal, IdBancal, actualizarBancal } from "../controller/controller.bancal.js";
const RouterBancal = Router();

RouterBancal.post("/bancal",verificarToken, postBancal);
RouterBancal.get("/bancal",verificarToken, getBancal)
RouterBancal.get("/bancal/:id",verificarToken, IdBancal);
RouterBancal.put("/bancal/:id",verificarToken, actualizarBancal);

export default RouterBancal;