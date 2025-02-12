import { Router } from "express"
import {
    registrarSemilleroInsumo,
    listarSemilleroInsumo,
    actualizarSemilleroInsumo,
    eliminarSemilleroInsumo,
} from "../controllers/SemilleroInsumo.js"
import verificarToken from "../../usuarios/middlewares/verificarToken.js"

const rutaSemilleroInsumo = Router()

rutaSemilleroInsumo.get("/bodega_herramienta", verificarToken, listarSemilleroInsumo)
rutaSemilleroInsumo.post("/bodega_herramienta", verificarToken, registrarSemilleroInsumo)
rutaSemilleroInsumo.put("/bodega_herramienta/:id_bodegaHerramienta", verificarToken, actualizarSemilleroInsumo)
rutaSemilleroInsumo.delete("/bodega_herramienta/:id_bodegaHerramienta", verificarToken, eliminarSemilleroInsumo)

export default rutaSemilleroInsumo