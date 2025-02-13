import { Router } from "express";
import {
    registrarEgreso,
    listarEgresos,
    actualizarEgreso,
    eliminarEgreso,
} from "../controllers/egresosController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaEgreso = Router();

/**
 * @swagger
 * tags:
 *   name: Egresos
 *   description: Endpoints para gestionar egresos
 */

/**
 * @swagger
 * /egresos:
 *   get:
 *     summary: Obtener la lista de egresos
 *     tags: [Egresos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de egresos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   fk_actividad:
 *                     type: integer
 *                     example: 10
 *                   fk_pago:
 *                     type: integer
 *                     example: 5
 *                   egreso_insumos:
 *                     type: number
 *                     example: 150.75
 *                   total_egresos:
 *                     type: number
 *                     example: 300.50
 */
rutaEgreso.get("/egresos", verificarToken, listarEgresos);

/**
 * @swagger
 * /egresos:
 *   post:
 *     summary: Registrar un nuevo egreso
 *     tags: [Egresos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fk_actividad:
 *                 type: integer
 *                 example: 10
 *               fk_pago:
 *                 type: integer
 *                 example: 5
 *               egreso_insumos:
 *                 type: number
 *                 example: 200.00
 *               total_egresos:
 *                 type: number
 *                 example: 500.00
 *     responses:
 *       201:
 *         description: Egreso registrado correctamente
 */
rutaEgreso.post("/egresos", verificarToken, registrarEgreso);

/**
 * @swagger
 * /egresos/{id}:
 *   put:
 *     summary: Actualizar un egreso existente
 *     tags: [Egresos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del egreso a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fk_actividad:
 *                 type: integer
 *                 example: 10
 *               fk_pago:
 *                 type: integer
 *                 example: 5
 *               egreso_insumos:
 *                 type: number
 *                 example: 300.50
 *               total_egresos:
 *                 type: number
 *                 example: 600.00
 *     responses:
 *       200:
 *         description: Egreso actualizado correctamente
 */
rutaEgreso.put("/egresos/:id", verificarToken, actualizarEgreso);

/**
 * @swagger
 * /egresos/{id}:
 *   delete:
 *     summary: Eliminar un egreso
 *     tags: [Egresos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del egreso a eliminar
 *     responses:
 *       200:
 *         description: Egreso eliminado correctamente
 */
rutaEgreso.delete("/egresos/:id", verificarToken, eliminarEgreso);

export default rutaEgreso;
