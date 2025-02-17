import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postTipo_especie, getTipo_especie, getIdTipo_especie, updateTipo_especie } from "../controller/controller.tipo_especie.js";

const RouterTipo_especie = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoEspecie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del tipo de especie
 *         nombre:
 *           type: string
 *           description: Nombre del tipo de especie
 *       example:
 *         id: 1
 *         nombre: "Frutal"
 */

/**
 * @swagger
 * /tipo_especie:
 *   post:
 *     summary: Crea un nuevo tipo de especie
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoEspecie]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoEspecie'
 *     responses:
 *       201:
 *         description: Tipo de especie creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
RouterTipo_especie.post("/tipo_especie", verificarToken, postTipo_especie);

/**
 * @swagger
 * /tipo_especie:
 *   get:
 *     summary: Obtiene todos los tipos de especies
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoEspecie]
 *     responses:
 *       200:
 *         description: Lista de tipos de especies
 *       403:
 *         description: No autorizado
 */
RouterTipo_especie.get("/tipo_especie", verificarToken, getTipo_especie);

/**
 * @swagger
 * /tipo_especie/{id}:
 *   get:
 *     summary: Obtiene un tipo de especie por ID
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoEspecie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de especie
 *     responses:
 *       200:
 *         description: Tipo de especie encontrado
 *       404:
 *         description: Tipo de especie no encontrado
 */
RouterTipo_especie.get("/tipo_especie/:id", verificarToken, getIdTipo_especie);

/**
 * @swagger
 * /tipo_especie/{id}:
 *   put:
 *     summary: Actualiza un tipo de especie por ID
 *     security:
 *       - BearerAuth: []
 *     tags: [TipoEspecie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de especie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoEspecie'
 *     responses:
 *       200:
 *         description: Tipo de especie actualizado
 *       404:
 *         description: Tipo de especie no encontrado
 */
RouterTipo_especie.put("/tipo_especie/:id", verificarToken, updateTipo_especie);

export default RouterTipo_especie;
