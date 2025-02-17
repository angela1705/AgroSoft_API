import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postActividades, getActividades, getIdActividades, updateActividades } from "../controller/controller.actividades.js";

const RouterActividades = Router();

/**
 * @swagger
 * tags:
 *   name: Actividades
 *   description: Endpoints para la gestión de actividades
 */

/**
 * @swagger
 * /actividades:
 *   post:
 *     summary: Crea una nueva actividad
 *     tags: [Actividades]
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
 *         description: Actividad creada correctamente
 *       400:
 *         description: Error en la solicitud
 */
RouterActividades.post("/actividades", verificarToken, postActividades);

/**
 * @swagger
 * /actividades:
 *   get:
 *     summary: Obtiene todas las actividades
 *     tags: [Actividades]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de actividades
 *       401:
 *         description: No autorizado
 */
RouterActividades.get("/actividades", verificarToken, getActividades);

/**
 * @swagger
 * /actividades/{id}:
 *   get:
 *     summary: Obtiene una actividad por ID
 *     tags: [Actividades]
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
 *         description: Datos de la actividad
 *       404:
 *         description: Actividad no encontrada
 */
RouterActividades.get("/actividades/:id", verificarToken, getIdActividades);

/**
 * @swagger
 * /actividades/{id}:
 *   put:
 *     summary: Actualiza una actividad por ID
 *     tags: [Actividades]
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
 *         description: Actividad actualizada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
RouterActividades.put("/actividades/:id", verificarToken, updateActividades);

export default RouterActividades;
