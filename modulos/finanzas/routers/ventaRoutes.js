import { Router } from "express";
import {
    registrarVenta,
    listarVentas,
    actualizarVenta,
    eliminarVenta,
} from "../controllers/ventaController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaVenta = Router();

rutaVenta.get("/ventas", verificarToken, listarVentas);
rutaVenta.post("/ventas", verificarToken, registrarVenta);
rutaVenta.put("/ventas/:id", verificarToken, actualizarVenta);
rutaVenta.delete("/ventas/:id", verificarToken, eliminarVenta);

export default rutaVenta;
