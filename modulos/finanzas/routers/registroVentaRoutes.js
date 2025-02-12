import { Router } from "express";
import {
    registrarVenta,
    listarVentas,
    actualizarVenta,
    eliminarVenta,
} from "../controllers/registroVentaController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaVenta = Router();

rutaVenta.get("/ventas", verificarToken, listarVentas);
rutaVenta.post("/ventas", verificarToken, registrarVenta);
rutaVenta.put("/ventas/:id_venta", verificarToken, actualizarVenta);
rutaVenta.delete("/ventas/:id_venta", verificarToken, eliminarVenta);

export default rutaVenta;
