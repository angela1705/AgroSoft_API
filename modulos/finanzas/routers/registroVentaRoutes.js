import { Router } from "express";
import {
    registrarRegistroVenta,
    listarRegistroVenta,
    actualizarRegistroVenta,
    eliminarRegistroVenta,
} from "../controllers/registroVentaController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaVenta = Router();

rutaVenta.get("/ventas", verificarToken, listarRegistroVenta);
rutaVenta.post("/ventas", verificarToken, registrarRegistroVenta);
rutaVenta.put("/ventas/:id", verificarToken, actualizarRegistroVenta);
rutaVenta.delete("/ventas/:id", verificarToken, eliminarRegistroVenta);

export default rutaVenta;
