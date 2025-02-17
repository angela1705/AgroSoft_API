import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postPlantaciones, getPlantaciones, getIdPlantaciones, updatePlantaciones } from "../controller/controller.plantaciones.js";

const RouterPlantaciones = Router();

/**
 * @swagger
 * tags:
 *   name: Plantaciones
 *   description: Gestión de plantaciones en los cultivos
 */

/**
 * @swagger
 * /plantaciones:
 *   post:
 *     summary: Crea una nueva plantación
 *     tags: [Plantaciones]
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
 *               ubicacion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plantación creada con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterPlantaciones.post("/plantaciones", verificarToken, postPlantaciones);

/**
 * @swagger
 * /plantaciones:
 *   get:
 *     summary: Obtiene todas las plantaciones registradas
 *     tags: [Plantaciones]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de plantaciones obtenida con éxito
 *       401:
 *         description: No autorizado
 */
RouterPlantaciones.get("/plantaciones", verificarToken, getPlantaciones);

/**
 * @swagger
 * /plantaciones/{id}:
 *   get:
 *     summary: Obtiene una plantación por ID
 *     tags: [Plantaciones]
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
 *         description: Plantación encontrada con éxito
 *       404:
 *         description: Plantación no encontrada
 */
RouterPlantaciones.get("/plantaciones/:id", verificarToken, getIdPlantaciones);

/**
 * @swagger
 * /plantaciones/{id}:
 *   put:
 *     summary: Actualiza una plantación por ID
 *     tags: [Plantaciones]
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
 *               ubicacion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plantación actualizada con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterPlantaciones.put("/plantaciones/:id", verificarToken, updatePlantaciones);

export default RouterPlantaciones;
