import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { 
    postTareas, 
    getTareas, 
    getIdTareas, 
    updateTareas 
} from "../controller/controller.tareas.js";

const RouterTareas = Router();

/**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: Gestión de tareas del sistema
 */

/**
 * @swagger
 * /tareas:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tareas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título de la tarea
 *               descripcion:
 *                 type: string
 *                 description: Descripción de la tarea
 *               estado:
 *                 type: string
 *                 enum: [pendiente, en_progreso, completada]
 *                 description: Estado de la tarea
 *     responses:
 *       201:
 *         description: Tarea creada con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterTareas.post("/tareas", verificarToken, postTareas);

/**
 * @swagger
 * /tareas:
 *   get:
 *     summary: Obtiene todas las tareas registradas
 *     tags: [Tareas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito
 *       401:
 *         description: No autorizado
 */
RouterTareas.get("/tareas", verificarToken, getTareas);

/**
 * @swagger
 * /tareas/{id}:
 *   get:
 *     summary: Obtiene una tarea por ID
 *     tags: [Tareas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a buscar
 *     responses:
 *       200:
 *         description: Tarea encontrada con éxito
 *       404:
 *         description: Tarea no encontrada
 */
RouterTareas.get("/tareas/:id", verificarToken, getIdTareas);

/**
 * @swagger
 * /tareas/{id}:
 *   put:
 *     summary: Actualiza una tarea por ID
 *     tags: [Tareas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Nuevo título de la tarea
 *               descripcion:
 *                 type: string
 *                 description: Nueva descripción de la tarea
 *               estado:
 *                 type: string
 *                 enum: [pendiente, en_progreso, completada]
 *                 description: Estado actualizado de la tarea
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Tarea no encontrada
 */
RouterTareas.put("/tareas/:id", verificarToken, updateTareas);

export default RouterTareas;
