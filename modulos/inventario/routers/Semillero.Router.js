import { Router } from "express"
import {
    registrarSemillero,
    listarSemilleros,
    actualizarSemillero,
    eliminarSemillero,
} from "../controllers/Semillero.Controller.js"

import verificarToken from "../../usuarios/middlewares/verificarToken.js"

const rutaSemillero = Router()

rutaSemillero.get("/semilleros", verificarToken, listarSemilleros)
rutaSemillero.post("/semilleros", verificarToken, registrarSemillero)
rutaSemillero.put("/semilleros/:id", verificarToken, actualizarSemillero)
rutaSemillero.delete("/semilleros/:id", verificarToken, eliminarSemillero)

export default rutaSemillero
