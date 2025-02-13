import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { listarInsumos, registrarInsumo, actualizarInsumo, eliminarInsumo } from "../controllers/Insumos.Controller.js";

const rutaInsumos = Router();

/**
 * @swagger
 * tags:
 *   name: Insumos
 *   description: Endpoints para la gestión de insumos
 */

/**
 * @swagger
 * /insumos:
 *   get:
 *     summary: Obtener la lista de insumos
 *     tags: [Insumos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de insumos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_insumo:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Cemento"
 *                   cantidad:
 *                     type: integer
 *                     example: 100
 */
rutaInsumos.get("/insumos", verificarToken, listarInsumos);

/**
 * @swagger
 * /insumos:
 *   post:
 *     summary: Registrar un nuevo insumo
 *     tags: [Insumos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Cemento"
 *               cantidad:
 *                 type: integer
 *                 example: 100
 *     responses:
 *       201:
 *         description: Insumo registrado correctamente
 */
rutaInsumos.post("/insumos", verificarToken, registrarInsumo);

/**
 * @swagger
 * /insumos/{id_insumo}:
 *   put:
 *     summary: Actualizar los datos de un insumo
 *     tags: [Insumos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_insumo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del insumo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Arena"
 *               cantidad:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       200:
 *         description: Insumo actualizado correctamente
 */
rutaInsumos.put("/insumos/:id_insumo", verificarToken, actualizarInsumo);

/**
 * @swagger
 * /insumos/{id_insumo}:
 *   delete:
 *     summary: Eliminar un insumo
 *     tags: [Insumos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_insumo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del insumo a eliminar
 *     responses:
 *       200:
 *         description: Insumo eliminado correctamente
 */
rutaInsumos.delete("/insumos/:id_insumo", verificarToken, eliminarInsumo);

export default rutaInsumos;
