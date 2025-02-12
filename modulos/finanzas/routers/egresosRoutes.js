import { Router } from "express";
import {
    registrarEgreso,
    listarEgresos,
    actualizarEgreso,
    eliminarEgreso,
} from "../controllers/egresosController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaEgreso = Router();

rutaEgreso.get("/egresos", verificarToken, listarEgresos);
rutaEgreso.post("/egresos", verificarToken, registrarEgreso);
rutaEgreso.put("/egresos/:id_egreso", verificarToken, actualizarEgreso);
rutaEgreso.delete("/egresos/:id_egreso", verificarToken, eliminarEgreso);

export default rutaEgreso;
