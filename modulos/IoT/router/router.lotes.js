import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postLote, getLote, IdLote  } from "../controller/controller.lotes.js";
const RouterLote = Router();

RouterLote.post("/lotes",postLote);
RouterLote.get("/lotes", getLote);
RouterLote.get("/lotes/:id", IdLote);

export default RouterLote;