import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { 
    postDatoMeteorologico, 
    getDatosMeteorologicos, 
    IdDatoMeteorologico, 
    actualizarDatoMeteorologico 
} from "../controller/controller_datos.meteorologicos.js";

const RouterDatosMeteorologicos = Router();

/**
 * @swagger
 * /datosmeteorologicos:
 *   post:
 *     summary: Registra un nuevo dato meteorológico
 *     tags: [Datos Meteorológicos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperatura:
 *                 type: number
 *                 example: 25.5
 *               humedad:
 *                 type: number
 *                 example: 60
 *               presion:
 *                 type: number
 *                 example: 1013
 *     responses:
 *       201:
 *         description: Dato meteorológico registrado correctamente
 *       400:
 *         description: Error en los datos proporcionados
 */
RouterDatosMeteorologicos.post("/datosmeteorologicos", verificarToken, postDatoMeteorologico);

/**
 * @swagger
 * /datosmeteorologicos:
 *   get:
 *     summary: Obtiene todos los datos meteorológicos
 *     tags: [Datos Meteorológicos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de datos meteorológicos obtenida correctamente
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
 *                   temperatura:
 *                     type: number
 *                     example: 25.5
 *                   humedad:
 *                     type: number
 *                     example: 60
 *                   presion:
 *                     type: number
 *                     example: 1013
 */
RouterDatosMeteorologicos.get("/datosmeteorologicos", verificarToken, getDatosMeteorologicos);

/**
 * @swagger
 * /datosmeteorologicos/{id_dato_meteorologico}:
 *   get:
 *     summary: Obtiene un dato meteorológico por ID
 *     tags: [Datos Meteorológicos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_dato_meteorologico
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del dato meteorológico
 *     responses:
 *       200:
 *         description: Datos meteorológicos obtenidos correctamente
 *       404:
 *         description: Dato meteorológico no encontrado
 */
RouterDatosMeteorologicos.get("/datosmeteorologicos/:id_dato_meteorologico", verificarToken, IdDatoMeteorologico);

/**
 * @swagger
 * /datosmeteorologicos/{id_dato_meteorologico}:
 *   put:
 *     summary: Actualiza un dato meteorológico
 *     tags: [Datos Meteorológicos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_dato_meteorologico
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del dato meteorológico a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperatura:
 *                 type: number
 *                 example: 26.0
 *               humedad:
 *                 type: number
 *                 example: 65
 *               presion:
 *                 type: number
 *                 example: 1012
 *     responses:
 *       200:
 *         description: Dato meteorológico actualizado correctamente
 *       404:
 *         description: Dato meteorológico no encontrado
 */
RouterDatosMeteorologicos.put("/datosmeteorologicos/:id_dato_meteorologico", verificarToken, actualizarDatoMeteorologico);

export default RouterDatosMeteorologicos;
