import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postTipos_control, getTipos_control, getIdTipos_control, updateTipos_control } from "../controller/controller.tipos_control.js";

const RouterTipos_control = Router();

/**
 * @swagger
 * tags:
 *   name: TiposControl
 *   description: Endpoints para gestionar los tipos de control
 */

/**
 * @swagger
 * /tipos_control:
 *   post:
 *     summary: Crear un nuevo tipo de control
 *     tags: [TiposControl]
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
 *                 example: Control biológico
 *     responses:
 *       201:
 *         description: Tipo de control creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
RouterTipos_control.post("/tipos_control", verificarToken, postTipos_control);

/**
 * @swagger
 * /tipos_control:
 *   get:
 *     summary: Obtener todos los tipos de control
 *     tags: [TiposControl]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tipos de control obtenida con éxito
 *       401:
 *         description: No autorizado
 */
RouterTipos_control.get("/tipos_control", verificarToken, getTipos_control);

/**
 * @swagger
 * /tipos_control/{id}:
 *   get:
 *     summary: Obtener un tipo de control por ID
 *     tags: [TiposControl]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tipo de control
 *     responses:
 *       200:
 *         description: Tipo de control obtenido con éxito
 *       404:
 *         description: Tipo de control no encontrado
 */
RouterTipos_control.get("/tipos_control/:id", verificarToken, getIdTipos_control);

/**
 * @swagger
 * /tipos_control/{id}:
 *   put:
 *     summary: Actualizar un tipo de control por ID
 *     tags: [TiposControl]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tipo de control a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Control químico
 *     responses:
 *       200:
 *         description: Tipo de control actualizado con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterTipos_control.put("/tipos_control/:id", verificarToken, updateTipos_control);

export default RouterTipos_control;
