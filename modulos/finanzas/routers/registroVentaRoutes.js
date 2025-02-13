import { Router } from "express";
import {
    registrarRegistroVenta,
    listarRegistroVenta,
    actualizarRegistroVenta,
    eliminarRegistroVenta,
} from "../controllers/registroVentaController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaVenta = Router();

rutaVenta.get("/registroventas", verificarToken, listarRegistroVenta);
rutaVenta.post("/registroventas", verificarToken, registrarRegistroVenta);
rutaVenta.put("/registroventas/:id", verificarToken, actualizarRegistroVenta);
rutaVenta.delete("/registroventas/:id", verificarToken, eliminarRegistroVenta);

export default rutaVenta;
