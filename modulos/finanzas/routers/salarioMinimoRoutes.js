import { Router } from "express";
import {
    registrarSalario,
    listarSalarios,
    actualizarSalario,
    eliminarSalario,
} from "../controllers/salarioMinimoController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaSalario = Router();

rutaSalario.get("/salarios", verificarToken, listarSalarios);
rutaSalario.post("/salarios", verificarToken, registrarSalario);
rutaSalario.put("/salarios/:id", verificarToken, actualizarSalario);
rutaSalario.delete("/salarios/:id", verificarToken, eliminarSalario);

export default rutaSalario;
