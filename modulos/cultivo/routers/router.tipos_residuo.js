import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postTipos_residuo, getTipos_residuo, getIdTipos_residuo, updateTipos_residuo } from "../controller/controller.tipos_residuo.js";

const RouterTipos_residuo = Router();

/**
 * @swagger
 * tags:
 *   name: TiposResiduo
 *   description: Endpoints para gestionar los tipos de residuo
 */

/**
 * @swagger
 * /tipos_residuo:
 *   post:
 *     summary: Crear un nuevo tipo de residuo
 *     tags: [TiposResiduo]
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
 *                 example: Residuos orgánicos
 *     responses:
 *       201:
 *         description: Tipo de residuo creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
RouterTipos_residuo.post("/tipos_residuo", verificarToken, postTipos_residuo);

/**
 * @swagger
 * /tipos_residuo:
 *   get:
 *     summary: Obtener todos los tipos de residuo
 *     tags: [TiposResiduo]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tipos de residuo obtenida con éxito
 *       401:
 *         description: No autorizado
 */
RouterTipos_residuo.get("/tipos_residuo", verificarToken, getTipos_residuo);

/**
 * @swagger
 * /tipos_residuo/{id}:
 *   get:
 *     summary: Obtener un tipo de residuo por ID
 *     tags: [TiposResiduo]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tipo de residuo
 *     responses:
 *       200:
 *         description: Tipo de residuo obtenido con éxito
 *       404:
 *         description: Tipo de residuo no encontrado
 */
RouterTipos_residuo.get("/tipos_residuo/:id", verificarToken, getIdTipos_residuo);

/**
 * @swagger
 * /tipos_residuo/{id}:
 *   put:
 *     summary: Actualizar un tipo de residuo por ID
 *     tags: [TiposResiduo]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tipo de residuo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Residuos inorgánicos
 *     responses:
 *       200:
 *         description: Tipo de residuo actualizado con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterTipos_residuo.put("/tipos_residuo/:id", verificarToken, updateTipos_residuo);

export default RouterTipos_residuo;
