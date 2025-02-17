import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postTipo_plaga, getTipo_plaga, getIdTipo_plaga, updateTipo_plaga } from "../controller/controller.tipo_plaga.js";

const RouterTipo_plaga = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoPlaga:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del tipo de plaga
 *         nombre:
 *           type: string
 *           description: Nombre del tipo de plaga
 *       example:
 *         id: 1
 *         nombre: "Insectos"
 */

/**
 * @swagger
 * /tipo_plaga:
 *   post:
 *     summary: Crea un nuevo tipo de plaga
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoPlaga]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoPlaga'
 *     responses:
 *       201:
 *         description: Tipo de plaga creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
RouterTipo_plaga.post("/tipo_plaga", verificarToken, postTipo_plaga);

/**
 * @swagger
 * /tipo_plaga:
 *   get:
 *     summary: Obtiene todos los tipos de plagas
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoPlaga]
 *     responses:
 *       200:
 *         description: Lista de tipos de plagas
 *       403:
 *         description: No autorizado
 */
RouterTipo_plaga.get("/tipo_plaga", verificarToken, getTipo_plaga);

/**
 * @swagger
 * /tipo_plaga/{id}:
 *   get:
 *     summary: Obtiene un tipo de plaga por ID
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoPlaga]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de plaga
 *     responses:
 *       200:
 *         description: Tipo de plaga encontrado
 *       404:
 *         description: Tipo de plaga no encontrado
 */
RouterTipo_plaga.get("/tipo_plaga/:id", verificarToken, getIdTipo_plaga);

/**
 * @swagger
 * /tipo_plaga/{id}:
 *   put:
 *     summary: Actualiza un tipo de plaga por ID
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoPlaga]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de plaga
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoPlaga'
 *     responses:
 *       200:
 *         description: Tipo de plaga actualizado
 *       404:
 *         description: Tipo de plaga no encontrado
 */
RouterTipo_plaga.put("/tipo_plaga/:id", verificarToken, updateTipo_plaga);

export default RouterTipo_plaga;
