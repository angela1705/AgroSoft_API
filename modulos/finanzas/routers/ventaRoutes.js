import { Router } from "express";
import {
    registrarVenta,
    listarVentas,
    actualizarVenta,
    eliminarVenta,
} from "../controllers/ventaController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaVenta = Router();

rutaVenta.get("/ventas", listarVentas);
rutaVenta.post("/ventas",  registrarVenta);
rutaVenta.put("/ventas/:id",  actualizarVenta);
rutaVenta.delete("/ventas/:id",  eliminarVenta);

export default rutaVenta;
