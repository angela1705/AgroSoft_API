import { Router } from "express";
import {
    registrarBodegaInsumo,
    listarBodegaInsumo,
    actualizarBodegaInsumo,
    eliminarBodegaInsumo,
} from "../controllers/BodegaInsumo.Controller.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaBodegaInsumo = Router();

/**
 * @swagger
 * tags:
 *   name: BodegaInsumo
 *   description: Endpoints para gestionar los insumos en la bodega
 */

/**
 * @swagger
 * /bodega_insumo:
 *   get:
 *     summary: Obtener la lista de insumos en la bodega
 *     tags: [BodegaInsumo]
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
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Clavos"
 *                   cantidad:
 *                     type: integer
 *                     example: 500
 */
rutaBodegaInsumo.get("/bodega_insumo", verificarToken, listarBodegaInsumo);

/**
 * @swagger
 * /bodega_insumo:
 *   post:
 *     summary: Registrar un nuevo insumo en la bodega
 *     tags: [BodegaInsumo]
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
 *                 example: "Clavos"
 *               cantidad:
 *                 type: integer
 *                 example: 500
 *     responses:
 *       201:
 *         description: Insumo registrado correctamente
 */
rutaBodegaInsumo.post("/bodega_insumo", verificarToken, registrarBodegaInsumo);

/**
 * @swagger
 * /bodega_insumo/{id}:
 *   put:
 *     summary: Actualizar los datos de un insumo en la bodega
 *     tags: [BodegaInsumo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
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
 *                 example: "Tornillos"
 *               cantidad:
 *                 type: integer
 *                 example: 300
 *     responses:
 *       200:
 *         description: Insumo actualizado correctamente
 */
rutaBodegaInsumo.put("/bodega_insumo/:id", verificarToken, actualizarBodegaInsumo);

/**
 * @swagger
 * /bodega_insumo/{id}:
 *   delete:
 *     summary: Eliminar un insumo de la bodega
 *     tags: [BodegaInsumo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del insumo a eliminar
 *     responses:
 *       200:
 *         description: Insumo eliminado correctamente
 */
rutaBodegaInsumo.delete("/bodega_insumo/:id", verificarToken, eliminarBodegaInsumo);

export default rutaBodegaInsumo;
