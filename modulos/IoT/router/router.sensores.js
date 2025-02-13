import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postSensores, getSensores, IdSensor, actualizarSensor } from "../controller/controller.sensores.js";

const RouterSensor = Router();

/**
 * @swagger
 * tags:
 *   name: Sensores
 *   description: API para la gestión de sensores
 */

/**
 * @swagger
 * /sensor:
 *   post:
 *     summary: Registra un nuevo sensor
 *     tags: [Sensores]
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
 *                 example: "Sensor de temperatura"
 *               tipo:
 *                 type: string
 *                 example: "Temperatura"
 *               ubicacion:
 *                 type: string
 *                 example: "Invernadero 1"
 *               valor:
 *                 type: number
 *                 example: 25.7
 *     responses:
 *       201:
 *         description: Sensor registrado correctamente
 *       400:
 *         description: Error en los datos proporcionados
 */
RouterSensor.post("/sensor", verificarToken, postSensores);

/**
 * @swagger
 * /sensor:
 *   get:
 *     summary: Obtiene todos los sensores
 *     tags: [Sensores]
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
 *                     example: "Sensor de temperatura"
 *                   tipo:
 *                     type: string
 *                     example: "Temperatura"
 *                   ubicacion:
 *                     type: string
 *                     example: "Invernadero 1"
 *                   valor:
 *                     type: number
 *                     example: 25.7
 */
RouterSensor.get("/sensor", verificarToken, getSensores);

/**
 * @swagger
 * /sensor/{id}:
 *   get:
 *     summary: Obtiene un sensor por ID
 *     tags: [Sensores]
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
RouterSensor.get("/sensor/:id", verificarToken, IdSensor);

/**
 * @swagger
 * /sensor/{id_sensor}:
 *   put:
 *     summary: Actualiza un sensor
 *     tags: [Sensores]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_sensor
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
 *                 example: "Sensor de humedad"
 *               tipo:
 *                 type: string
 *                 example: "Humedad"
 *               ubicacion:
 *                 type: string
 *                 example: "Invernadero 2"
 *               valor:
 *                 type: number
 *                 example: 70.2
 *     responses:
 *       200:
 *         description: Sensor actualizado correctamente
 *       404:
 *         description: Sensor no encontrado
 */
RouterSensor.put("/sensor/:id_sensor", verificarToken, actualizarSensor);

export default RouterSensor;
