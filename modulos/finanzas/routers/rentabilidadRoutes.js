import { Router } from "express";
import {
    registrarRentabilidad,
    listarRentabilidad,
    actualizarRentabilidad,
    eliminarRentabilidad,
} from "../controllers/rentabilidadController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaRentabilidad = Router();

rutaRentabilidad.get("/rentabilidad", verificarToken, listarRentabilidad);
rutaRentabilidad.post("/rentabilidad", verificarToken, registrarRentabilidad);
rutaRentabilidad.put("/rentabilidad/:id_rentabilidad", verificarToken, actualizarRentabilidad);
rutaRentabilidad.delete("/rentabilidad/:id_rentabilidad", verificarToken, eliminarRentabilidad);

export default rutaRentabilidad;
