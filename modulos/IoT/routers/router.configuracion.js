import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postConfiguracion, getConfiguracion, IdConfiguracion, actualizarConfiguracion } from "../controller/controller.configuracion.js";

const RouterConfiguracion = Router();

/**
 * @swagger
 * tags:
 *   name: Configuracion
 *   description: Endpoints para gestionar configuraciones
 */

/**
 * @swagger
 * /configuracion:
 *   post:
 *     summary: Registrar una nueva configuración
 *     tags: [Configuracion]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fk_lote:
 *                 type: integer
 *                 example: 1
 *               tamx:
 *                 type: integer
 *                 example: 10
 *               tamy:
 *                 type: integer
 *                 example: 15
 *               posx:
 *                 type: integer
 *                 example: 5
 *               posy:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Configuración registrada correctamente
 */
RouterConfiguracion.post("/configuracion", verificarToken, postConfiguracion);

/**
 * @swagger
 * /configuracion:
 *   get:
 *     summary: Obtener la lista de configuraciones
 *     tags: [Configuracion]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de configuraciones obtenida correctamente
 */
RouterConfiguracion.get("/configuracion", verificarToken, getConfiguracion);

/**
 * @swagger
 * /configuracion/{id}:
 *   get:
 *     summary: Obtener una configuración por ID
 *     tags: [Configuracion]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la configuración a obtener
 *     responses:
 *       200:
 *         description: Configuración obtenida correctamente
 */
RouterConfiguracion.get("/configuracion/:id", verificarToken, IdConfiguracion);

/**
 * @swagger
 * /configuracion/{id}:
 *   put:
 *     summary: Actualizar una configuración
 *     tags: [Configuracion]
 *     security:
 *       - bearerAuth: []
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
 *               fk_lote:
 *                 type: integer
 *                 example: 1
 *               tamx:
 *                 type: integer
 *                 example: 12
 *               tamy:
 *                 type: integer
 *                 example: 18
 *               posx:
 *                 type: integer
 *                 example: 6
 *               posy:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: Configuración actualizada correctamente
 */
RouterConfiguracion.put("/configuracion/:id", verificarToken, actualizarConfiguracion);

export default RouterConfiguracion;
