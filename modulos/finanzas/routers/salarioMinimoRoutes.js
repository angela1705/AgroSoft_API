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
rutaSalario.put("/salarios/:id_salario", verificarToken, actualizarSalario);
rutaSalario.delete("/salarios/:id_salario", verificarToken, eliminarSalario);

export default rutaSalario;
