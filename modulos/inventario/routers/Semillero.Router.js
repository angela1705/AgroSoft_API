import { Router } from "express"
import {
    registrarSemillero,
    listarSemilleros,
    actualizarSemillero,
    eliminarSemillero,
} from "../controllers/Semillero.Controller.js"

import verificarToken from "../../usuarios/middlewares/verificarToken.js"

const rutaSemillero = Router()

rutaSemillero.get("/bodega_herramienta", verificarToken, listarSemilleros)
rutaSemillero.post("/bodega_herramienta", verificarToken, registrarSemillero)
rutaSemillero.put("/bodega_herramienta/:id_bodegaHerramienta", verificarToken, actualizarSemillero)
rutaSemillero.delete("/bodega_herramienta/:id_bodegaHerramienta", verificarToken, eliminarSemillero)

export default rutaSemillero;