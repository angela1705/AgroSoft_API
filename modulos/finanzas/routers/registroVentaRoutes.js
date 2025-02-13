import { Router } from "express";
import {
    registrarRegistroVenta,
    listarRegistroVenta,
    actualizarRegistroVenta,
    eliminarRegistroVenta,
} from "../controllers/registroVentaController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaVenta = Router();

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Endpoints para gestionar las ventas de productos
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Obtener la lista de ventas registradas
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_venta:
 *                     type: integer
 *                     example: 1
 *                   producto:
 *                     type: string
 *                     example: "Tomates"
 *                   cantidad:
 *                     type: integer
 *                     example: 50
 *                   precio_unitario:
 *                     type: number
 *                     example: 2.5
 *                   total:
 *                     type: number
 *                     example: 125.00
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     example: "2024-02-12"
 */
rutaVenta.get("/ventas", verificarToken, listarRegistroVenta);

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Registrar una nueva venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto:
 *                 type: string
 *                 example: "Tomates"
 *               cantidad:
 *                 type: integer
 *                 example: 50
 *               precio_unitario:
 *                 type: number
 *                 example: 2.5
 *               total:
 *                 type: number
 *                 example: 125.00
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-12"
 *     responses:
 *       201:
 *         description: Venta registrada correctamente
 */
rutaVenta.post("/ventas", verificarToken, registrarRegistroVenta);

/**
 * @swagger
 * /ventas/{id_venta}:
 *   put:
 *     summary: Actualizar los datos de una venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto:
 *                 type: string
 *                 example: "Tomates"
 *               cantidad:
 *                 type: integer
 *                 example: 60
 *               precio_unitario:
 *                 type: number
 *                 example: 2.5
 *               total:
 *                 type: number
 *                 example: 150.00
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-13"
 *     responses:
 *       200:
 *         description: Venta actualizada correctamente
 */
rutaVenta.put("/ventas/:id_venta", verificarToken, actualizarRegistroVenta);

/**
 * @swagger
 * /ventas/{id_venta}:
 *   delete:
 *     summary: Eliminar un registro de venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a eliminar
 *     responses:
 *       200:
 *         description: Venta eliminada correctamente
 */
rutaVenta.delete("/ventas/:id_venta", verificarToken, eliminarRegistroVenta);

export default rutaVenta;
