import { Router } from "express";
import {
    registrarPagoTrabajador,
    listarPagoTrabajador,
    actualizarPagoTrabajador,
    eliminarPagoTrabajador,
} from "../controllers/pagoTrabajadorController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaPago = Router();

/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: Endpoints para gestionar los pagos a trabajadores
 */

/**
 * @swagger
 * /pagos:
 *   get:
 *     summary: Obtener la lista de pagos a trabajadores
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pagos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_pago:
 *                     type: integer
 *                     example: 1
 *                   trabajador:
 *                     type: string
 *                     example: "Carlos López"
 *                   monto:
 *                     type: number
 *                     example: 1500000.00
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     example: "2024-02-12"
 */
rutaPago.get("/pagos", verificarToken, listarPagoTrabajador);

/**
 * @swagger
 * /pagos:
 *   post:
 *     summary: Registrar un pago a un trabajador
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trabajador:
 *                 type: string
 *                 example: "Carlos López"
 *               monto:
 *                 type: number
 *                 example: 1500000.00
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-12"
 *     responses:
 *       201:
 *         description: Pago registrado correctamente
 */
rutaPago.post("/pagos", verificarToken, registrarPagoTrabajador);

/**
 * @swagger
 * /pagos/{id_pago}:
 *   put:
 *     summary: Actualizar un pago a un trabajador
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_pago
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trabajador:
 *                 type: string
 *                 example: "Carlos López"
 *               monto:
 *                 type: number
 *                 example: 1700000.00
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-03-01"
 *     responses:
 *       200:
 *         description: Pago actualizado correctamente
 */
rutaPago.put("/pagos/:id_pago", verificarToken, actualizarPagoTrabajador);

/**
 * @swagger
 * /pagos/{id_pago}:
 *   delete:
 *     summary: Eliminar un pago a un trabajador
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_pago
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago a eliminar
 *     responses:
 *       200:
 *         description: Pago eliminado correctamente
 */
rutaPago.delete("/pagos/:id_pago", verificarToken, eliminarPagoTrabajador);

export default rutaPago;
