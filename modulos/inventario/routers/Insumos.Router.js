import { Router } from "express"

import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { listarInsumos, registrarInsumo, actualizarInsumo, eliminarInsumo } from "../controllers/Insumos.Controller.js"
const rutaInsumos = Router()

rutaInsumos.get("/insumos", verificarToken, listarInsumos)
rutaInsumos.post("/insumos", verificarToken, registrarInsumo)
rutaInsumos.put("/insumos/:id", verificarToken, actualizarInsumo)
rutaInsumos.delete("/insumos/:id", verificarToken, eliminarInsumo)

export default rutaInsumos