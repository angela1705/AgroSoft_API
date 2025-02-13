import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { registrarSemillero, listarSemilleros, actualizarSemillero, eliminarSemillero } from "../controllers/Semillero.Controller.js";

const rutaSemillero = Router();

/**
 * @swagger
 * tags:
 *   name: Semilleros
 *   description: Endpoints para la gestión de semilleros
 */

/**
 * @swagger
 * /semilleros:
 *   get:
 *     summary: Obtener la lista de semilleros
 *     tags: [Semilleros]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de semilleros obtenida correctamente
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
 *                     example: "Semillero de Innovación"
 *                   descripcion:
 *                     type: string
 *                     example: "Grupo de investigación sobre tecnología"
 */
rutaSemillero.get("/semilleros", verificarToken, listarSemilleros);

/**
 * @swagger
 * /semilleros:
 *   post:
 *     summary: Registrar un nuevo semillero
 *     tags: [Semilleros]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Semillero de Innovación"
 *               descripcion:
 *                 type: string
 *                 example: "Grupo de investigación sobre tecnología"
 *     responses:
 *       201:
 *         description: Semillero registrado correctamente
 */
rutaSemillero.post("/semilleros", verificarToken, registrarSemillero);

/**
 * @swagger
 * /semilleros/{id}:
 *   put:
 *     summary: Actualizar los datos de un semillero
 *     tags: [Semilleros]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del semillero a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Semillero de IA"
 *               descripcion:
 *                 type: string
 *                 example: "Grupo de investigación sobre Inteligencia Artificial"
 *     responses:
 *       200:
 *         description: Semillero actualizado correctamente
 */
rutaSemillero.put("/semilleros/:id", verificarToken, actualizarSemillero);

/**
 * @swagger
 * /semilleros/{id}:
 *   delete:
 *     summary: Eliminar un semillero
 *     tags: [Semilleros]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del semillero a eliminar
 *     responses:
 *       200:
 *         description: Semillero eliminado correctamente
 */
rutaSemillero.delete("/semilleros/:id", verificarToken, eliminarSemillero);

export default rutaSemillero;
