import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postSensorBancal, getSensorBancal, IdSensorBancal, actualizarSensorBancal } from "../controller/controller.sensor_bancal.js"; 

const RouterSensorBancal = Router();

/**
 * @swagger
 * /sensorbancal:
 *   post:
 *     summary: Registra un nuevo sensor en el bancal
 *     tags: [Sensor Bancal]
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
 *                 example: "Sensor de humedad"
 *               tipo:
 *                 type: string
 *                 example: "Humedad"
 *               ubicacion:
 *                 type: string
 *                 example: "Bancal 1"
 *               valor:
 *                 type: number
 *                 example: 45.6
 *     responses:
 *       201:
 *         description: Sensor registrado correctamente
 *       400:
 *         description: Error en los datos proporcionados
 */
RouterSensorBancal.post("/sensorbancal", verificarToken, postSensorBancal);

/**
 * @swagger
 * /sensorbancal:
 *   get:
 *     summary: Obtiene todos los sensores en los bancales
 *     tags: [Sensor Bancal]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de sensores obtenida correctamente
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
 *                     example: "Sensor de humedad"
 *                   tipo:
 *                     type: string
 *                     example: "Humedad"
 *                   ubicacion:
 *                     type: string
 *                     example: "Bancal 1"
 *                   valor:
 *                     type: number
 *                     example: 45.6
 */
RouterSensorBancal.get("/sensorbancal", verificarToken, getSensorBancal);

/**
 * @swagger
 * /sensorbancal/{id}:
 *   get:
 *     summary: Obtiene un sensor de bancal por ID
 *     tags: [Sensor Bancal]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sensor
 *     responses:
 *       200:
 *         description: Sensor obtenido correctamente
 *       404:
 *         description: Sensor no encontrado
 */
RouterSensorBancal.get("/sensorbancal/:id", verificarToken, IdSensorBancal);

/**
 * @swagger
 * /sensorbancal/{id}:
 *   put:
 *     summary: Actualiza un sensor de bancal
 *     tags: [Sensor Bancal]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sensor a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sensor de temperatura"
 *               tipo:
 *                 type: string
 *                 example: "Temperatura"
 *               ubicacion:
 *                 type: string
 *                 example: "Bancal 2"
 *               valor:
 *                 type: number
 *                 example: 22.3
 *     responses:
 *       200:
 *         description: Sensor actualizado correctamente
 *       404:
 *         description: Sensor no encontrado
 */
RouterSensorBancal.put("/sensorbancal/:id", verificarToken, actualizarSensorBancal);

export default RouterSensorBancal;
