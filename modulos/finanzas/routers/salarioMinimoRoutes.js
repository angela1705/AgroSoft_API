import { Router } from "express";
import {
    registrarSalario,
    listarSalarios,
    actualizarSalario,
    eliminarSalario,
} from "../controllers/salarioMinimoController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaSalario = Router();

/**
 * @swagger
 * tags:
 *   name: Salarios
 *   description: Endpoints para gestionar los salarios mínimos
 */

/**
 * @swagger
 * /salarios:
 *   get:
 *     summary: Obtener la lista de salarios mínimos registrados
 *     tags: [Salarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de salarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_salario:
 *                     type: integer
 *                     example: 1
 *                   monto:
 *                     type: number
 *                     example: 1160000.00
 *                   año:
 *                     type: integer
 *                     example: 2024
 */
rutaSalario.get("/salarios", verificarToken, listarSalarios);

/**
 * @swagger
 * /salarios:
 *   post:
 *     summary: Registrar un nuevo salario mínimo
 *     tags: [Salarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: number
 *                 example: 1160000.00
 *               año:
 *                 type: integer
 *                 example: 2024
 *     responses:
 *       201:
 *         description: Salario registrado correctamente
 */
rutaSalario.post("/salarios", verificarToken, registrarSalario);

/**
 * @swagger
 * /salarios/{id_salario}:
 *   put:
 *     summary: Actualizar los datos de un salario mínimo
 *     tags: [Salarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_salario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del salario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               monto:
 *                 type: number
 *                 example: 1200000.00
 *               año:
 *                 type: integer
 *                 example: 2025
 *     responses:
 *       200:
 *         description: Salario actualizado correctamente
 */
rutaSalario.put("/salarios/:id_salario", verificarToken, actualizarSalario);

/**
 * @swagger
 * /salarios/{id_salario}:
 *   delete:
 *     summary: Eliminar un salario mínimo registrado
 *     tags: [Salarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_salario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del salario a eliminar
 *     responses:
 *       200:
 *         description: Salario eliminado correctamente
 */
rutaSalario.delete("/salarios/:id_salario", verificarToken, eliminarSalario);

export default rutaSalario;
