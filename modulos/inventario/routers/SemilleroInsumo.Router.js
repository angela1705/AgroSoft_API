import { Router } from "express";
import {
    registrarSemilleroInsumo,
    listarSemilleroInsumo,
    actualizarSemilleroInsumo,
    eliminarSemilleroInsumo,
} from "../controllers/SemilleroInsumo.js"
import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import pool from "../../usuarios/database/Conexion.js"

const rutaSemilleroInsumo = Router()

rutaSemilleroInsumo.get("/semillero_insumo", verificarToken, listarSemilleroInsumo)
rutaSemilleroInsumo.post("/semillero_insumo", verificarToken, registrarSemilleroInsumo)
rutaSemilleroInsumo.put("/semillero_insumo/:id", verificarToken, actualizarSemilleroInsumo)
rutaSemilleroInsumo.delete("/semillero_insumo/:id", verificarToken, eliminarSemilleroInsumo)

export default rutaSemilleroInsumo