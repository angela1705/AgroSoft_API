import { Router } from "express";
import {
    registrarPago,
    listarPagos,
    actualizarPago,
    eliminarPago,
} from "../controllers/pagoTrabajadorController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaPago = Router();

rutaPago.get("/pagos", verificarToken, listarPagos);
rutaPago.post("/pagos", verificarToken, registrarPago);
rutaPago.put("/pagos/:id_pago", verificarToken, actualizarPago);
rutaPago.delete("/pagos/:id_pago", verificarToken, eliminarPago);

export default rutaPago;
