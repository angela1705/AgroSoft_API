import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { postEspecies, getEspecies, getIdEspecies, updateEspecies } from "../controller/controller.especies.js";

const RouterEspecies = Router();

/**
 * @swagger
 * tags:
 *   name: Especies
 *   description: Endpoints para la gestión de especies
 */

/**
 * @swagger
 * /especies:
 *   post:
 *     summary: Registra una nueva especie
 *     tags: [Especies]
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
 *         description: Especie registrada correctamente
 *       400:
 *         description: Error en la solicitud
 */
RouterEspecies.post("/especies", verificarToken, postEspecies);

/**
 * @swagger
 * /especies:
 *   get:
 *     summary: Obtiene todas las especies registradas
 *     tags: [Especies]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de especies
 *       401:
 *         description: No autorizado
 */
RouterEspecies.get("/especies", verificarToken, getEspecies);

/**
 * @swagger
 * /especies/{id}:
 *   get:
 *     summary: Obtiene una especie por ID
 *     tags: [Especies]
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
 *         description: Datos de la especie
 *       404:
 *         description: Especie no encontrada
 */
RouterEspecies.get("/especies/:id", verificarToken, getIdEspecies);

/**
 * @swagger
 * /especies/{id}:
 *   put:
 *     summary: Actualiza una especie por ID
 *     tags: [Especies]
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
 *         description: Especie actualizada correctamente
 *       400:
 *         description: Error en la solicitud
 */
RouterEspecies.put("/especies/:id", verificarToken, updateEspecies);

export default RouterEspecies;
