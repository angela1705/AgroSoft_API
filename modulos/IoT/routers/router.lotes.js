import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postLote, getLote, IdLote, actualizarLote } from "../controller/controller.lotes.js";

const RouterLote = Router();

/**
 * @swagger
 * /lotes:
 *   post:
 *     summary: Registra un nuevo lote
 *     tags: [Lotes]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Lote 1"
 *               descripcion:
 *                 type: string
 *                 example: "Lote de prueba"
 *               area:
 *                 type: number
 *                 example: 150.5
 *     responses:
 *       201:
 *         description: Lote registrado correctamente
 *       400:
 *         description: Error en los datos proporcionados
 */
RouterLote.post("/lotes", verificarToken, postLote);

/**
 * @swagger
 * /lotes:
 *   get:
 *     summary: Obtiene todos los lotes
 *     tags: [Lotes]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de lotes obtenida correctamente
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
 *                   nombre:
 *                     type: string
 *                     example: "Lote 1"
 *                   descripcion:
 *                     type: string
 *                     example: "Lote de prueba"
 *                   area:
 *                     type: number
 *                     example: 150.5
 */
RouterLote.get("/lotes", verificarToken, getLote);

/**
 * @swagger
 * /lotes/{id}:
 *   get:
 *     summary: Obtiene un lote por ID
 *     tags: [Lotes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del lote
 *     responses:
 *       200:
 *         description: Lote obtenido correctamente
 *       404:
 *         description: Lote no encontrado
 */
RouterLote.get("/lotes/:id", verificarToken, IdLote);

/**
 * @swagger
 * /lotes/{id}:
 *   put:
 *     summary: Actualiza un lote
 *     tags: [Lotes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del lote a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Lote 1 Actualizado"
 *               descripcion:
 *                 type: string
 *                 example: "Descripción actualizada"
 *               area:
 *                 type: number
 *                 example: 180.0
 *     responses:
 *       200:
 *         description: Lote actualizado correctamente
 *       404:
 *         description: Lote no encontrado
 */
RouterLote.put("/lotes/:id", verificarToken, actualizarLote);

export default RouterLote;
