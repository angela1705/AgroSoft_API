import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postBancal, getBancal, IdBancal, actualizarBancal } from "../controller/controller.bancal.js";

const RouterBancal = Router();

/**
 * @swagger
 * /bancal:
 *   post:
 *     summary: Registra un nuevo bancal
 *     tags: [Bancal]
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
 *                 example: "Bancal Norte"
 *               descripcion:
 *                 type: string
 *                 example: "Un bancal para cultivo de maíz"
 *     responses:
 *       201:
 *         description: Bancal registrado correctamente
 *       400:
 *         description: Error en los datos proporcionados
 */
RouterBancal.post("/bancal", verificarToken, postBancal);

/**
 * @swagger
 * /bancal:
 *   get:
 *     summary: Obtiene todos los bancales
 *     tags: [Bancal]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de bancales obtenida correctamente
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
 *                   nombre:
 *                     type: string
 *                     example: "Bancal Norte"
 *                   descripcion:
 *                     type: string
 *                     example: "Un bancal para cultivo de maíz"
 */
RouterBancal.get("/bancal", verificarToken, getBancal);

/**
 * @swagger
 * /bancal/{id}:
 *   get:
 *     summary: Obtiene un bancal por ID
 *     tags: [Bancal]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del bancal
 *     responses:
 *       200:
 *         description: Datos del bancal obtenidos correctamente
 *       404:
 *         description: Bancal no encontrado
 */
RouterBancal.get("/bancal/:id", verificarToken, IdBancal);

/**
 * @swagger
 * /bancal/{id}:
 *   put:
 *     summary: Actualiza los datos de un bancal
 *     tags: [Bancal]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del bancal a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Bancal Sur"
 *               descripcion:
 *                 type: string
 *                 example: "Un bancal para cultivo de frijol"
 *     responses:
 *       200:
 *         description: Bancal actualizado correctamente
 *       404:
 *         description: Bancal no encontrado
 */
RouterBancal.put("/bancal/:id", verificarToken, actualizarBancal);

export default RouterBancal;
