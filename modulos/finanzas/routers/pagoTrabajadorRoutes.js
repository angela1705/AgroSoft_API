import { Router } from "express";
import {
    registrarPagoTrabajador,
    listarPagoTrabajador,
    actualizarPagoTrabajador,
    eliminarPagoTrabajador,
} from "../controllers/pagoTrabajadorController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaPago = Router();

rutaPago.get("/pagos", verificarToken, listarPagoTrabajador);
rutaPago.post("/pagos", verificarToken, registrarPagoTrabajador);
rutaPago.put("/pagos/:id_pago", verificarToken, actualizarPagoTrabajador);
rutaPago.delete("/pagos/:id_pago", verificarToken, eliminarPagoTrabajador);

export default rutaPago;
