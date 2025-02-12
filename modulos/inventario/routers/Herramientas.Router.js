import { Router } from "express"
import {
    registrarHerramienta,
    listarHerramientas,
    actualizarHerramienta,
    eliminarHerramienta,
} from "../controllers/Herramientas.Controller.js"

import verificarToken from "../../usuarios/middlewares/verificarToken.js"

const rutaHerramienta = Router()

rutaHerramienta.get("/herramientas", verificarToken, listarHerramientas)
rutaHerramienta.post("/herramientas", verificarToken, registrarHerramienta)
rutaHerramienta.put("/herramientas/:id", verificarToken, actualizarHerramienta)
rutaHerramienta.delete("/herramientas/:id", verificarToken, eliminarHerramienta)

export default rutaHerramienta;
