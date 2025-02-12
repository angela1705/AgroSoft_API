import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postLote, getLote, IdLote, actualizarLote  } from "../controller/controller.lotes.js";
const RouterLote = Router();

RouterLote.post("/lotes",postLote);
RouterLote.get("/lotes", getLote);
RouterLote.get("/lotes/:id", IdLote);
RouterLote.put("/lotes/:id",actualizarLote);

export default RouterLote;