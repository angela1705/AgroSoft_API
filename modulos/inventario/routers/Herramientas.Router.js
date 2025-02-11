import { Router } from "express"
import {
    registrarHerramienta,
    listarHerramientas,
    actualizarHerramienta,
    eliminarHerramienta,
} from "../controllers/Herramientas.Controller.js"

import verificarToken from "../../usuarios/middlewares/verificarToken.js"

const rutaHerramienta = Router()

rutaHerramienta.get("/bodega_herramienta", verificarToken, listarHerramientas)
rutaHerramienta.post("/bodega_herramienta", verificarToken, registrarHerramienta)
rutaHerramienta.put("/bodega_herramienta/:id_bodegaHerramienta", verificarToken, actualizarHerramienta)
rutaHerramienta.delete("/bodega_herramienta/:id_bodegaHerramienta", verificarToken, eliminarHerramienta)

export default rutaHerramienta