import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postControles, getControles, getIdControles, updateControles } from "../controller/controller.controles.js";

const RouterControles = Router();

/**
 * @swagger
 * tags:
 *   name: Controles
 *   description: Endpoints para la gestión de controles
 */

/**
 * @swagger
 * /controles:
 *   post:
 *     summary: Crea un nuevo control
 *     tags: [Controles]
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
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Control creado correctamente
 *       400:
 *         description: Error en la solicitud
 */
RouterControles.post("/controles", verificarToken, postControles);

/**
 * @swagger
 * /controles:
 *   get:
 *     summary: Obtiene todos los controles
 *     tags: [Controles]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de controles
 *       401:
 *         description: No autorizado
 */
RouterControles.get("/controles", verificarToken, getControles);

/**
 * @swagger
 * /controles/{id}:
 *   get:
 *     summary: Obtiene un control por ID
 *     tags: [Controles]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del control
 *       404:
 *         description: Control no encontrado
 */
RouterControles.get("/controles/:id", verificarToken, getIdControles);

/**
 * @swagger
 * /controles/{id}:
 *   put:
 *     summary: Actualiza un control por ID
 *     tags: [Controles]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Control actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
RouterControles.put("/controles/:id", verificarToken, updateControles);

export default RouterControles;
