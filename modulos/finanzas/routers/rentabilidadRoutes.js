import { Router } from "express";
import {
    registrarRentabilidad,
    listarRentabilidad,
    actualizarRentabilidad,
    eliminarRentabilidad,
} from "../controllers/rentabilidadController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaRentabilidad = Router();

/**
 * @swagger
 * tags:
 *   name: Rentabilidad
 *   description: Endpoints para gestionar la rentabilidad
 */

/**
 * @swagger
 * /rentabilidad:
 *   get:
 *     summary: Obtener la lista de registros de rentabilidad
 *     tags: [Rentabilidad]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros de rentabilidad obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_rentabilidad:
 *                     type: integer
 *                     example: 1
 *                   ingreso_total:
 *                     type: number
 *                     example: 5000.00
 *                   egreso_total:
 *                     type: number
 *                     example: 2000.00
 *                   utilidad_neta:
 *                     type: number
 *                     example: 3000.00
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     example: "2024-02-12"
 */
rutaRentabilidad.get("/rentabilidad", verificarToken, listarRentabilidad);

/**
 * @swagger
 * /rentabilidad:
 *   post:
 *     summary: Registrar un nuevo cálculo de rentabilidad
 *     tags: [Rentabilidad]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingreso_total:
 *                 type: number
 *                 example: 5000.00
 *               egreso_total:
 *                 type: number
 *                 example: 2000.00
 *               utilidad_neta:
 *                 type: number
 *                 example: 3000.00
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-12"
 *     responses:
 *       201:
 *         description: Rentabilidad registrada correctamente
 */
rutaRentabilidad.post("/rentabilidad", verificarToken, registrarRentabilidad);

/**
 * @swagger
 * /rentabilidad/{id_rentabilidad}:
 *   put:
 *     summary: Actualizar los datos de una rentabilidad
 *     tags: [Rentabilidad]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_rentabilidad
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro de rentabilidad a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingreso_total:
 *                 type: number
 *                 example: 5500.00
 *               egreso_total:
 *                 type: number
 *                 example: 2200.00
 *               utilidad_neta:
 *                 type: number
 *                 example: 3300.00
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-13"
 *     responses:
 *       200:
 *         description: Rentabilidad actualizada correctamente
 */
rutaRentabilidad.put("/rentabilidad/:id_rentabilidad", verificarToken, actualizarRentabilidad);

/**
 * @swagger
 * /rentabilidad/{id_rentabilidad}:
 *   delete:
 *     summary: Eliminar un registro de rentabilidad
 *     tags: [Rentabilidad]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_rentabilidad
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro de rentabilidad a eliminar
 *     responses:
 *       200:
 *         description: Rentabilidad eliminada correctamente
 */
rutaRentabilidad.delete("/rentabilidad/:id_rentabilidad", verificarToken, eliminarRentabilidad);

export default rutaRentabilidad;
