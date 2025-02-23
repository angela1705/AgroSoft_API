import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postConfiguracion, getConfiguracion, IdConfiguracion, actualizarConfiguracion } from "../controller/controller.configuracion.js";

const RouterConfiguracion = Router();

/**
 * @swagger
 * /configuracion:
 *   post:
 *     summary: Registra una nueva configuración
 *     tags: [Configuración]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clave:
 *                 type: string
 *                 example: "modo_operacion"
 *               valor:
 *                 type: string
 *                 example: "produccion"
 *     responses:
 *       201:
 *         description: Configuración registrada correctamente
 *       400:
 *         description: Error en los datos proporcionados
 */
RouterConfiguracion.post("/configuracion", verificarToken, postConfiguracion);

/**
 * @swagger
 * /configuracion:
 *   get:
 *     summary: Obtiene todas las configuraciones
 *     tags: [Configuración]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de configuraciones obtenida correctamente
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
 *                   clave:
 *                     type: string
 *                     example: "modo_operacion"
 *                   valor:
 *                     type: string
 *                     example: "produccion"
 */
RouterConfiguracion.get("/configuracion", verificarToken, getConfiguracion);

/**
 * @swagger
 * /configuracion/{id}:
 *   get:
 *     summary: Obtiene una configuración por ID
 *     tags: [Configuración]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la configuración
 *     responses:
 *       200:
 *         description: Datos de la configuración obtenidos correctamente
 *       404:
 *         description: Configuración no encontrada
 */
RouterConfiguracion.get("/configuracion/:id", verificarToken, IdConfiguracion);

/**
 * @swagger
 * /configuracion/{id}:
 *   put:
 *     summary: Actualiza los datos de una configuración
 *     tags: [Configuración]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la configuración a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clave:
 *                 type: string
 *                 example: "modo_operacion"
 *               valor:
 *                 type: string
 *                 example: "mantenimiento"
 *     responses:
 *       200:
 *         description: Configuración actualizada correctamente
 *       404:
 *         description: Configuración no encontrada
 */
RouterConfiguracion.put("/configuracion/:id", verificarToken, actualizarConfiguracion);

export default RouterConfiguracion;
