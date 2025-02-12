import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postLote, getLote, IdLote,  } from "../controller/controller.lotes.js";
const RouterLote = Router();

RouterLote.post("/lotes",verificarToken, postLote);
RouterLote.get("/lotes",verificarToken, getLote);
RouterLote.get("/lotes/:id",verificarToken, IdLote);


export default RouterLote;