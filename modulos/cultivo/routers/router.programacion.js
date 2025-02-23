import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { 
    postProgramacion, 
    getProgramacion, 
    getIdProgramacion, 
    updateProgramacion 
} from "../controller/controller.programacion.js";

const RouterProgramacion = Router();

/**
 * @swagger
 * tags:
 *   name: Programación
 *   description: Gestión de la programación de actividades agrícolas
 */

/**
 * @swagger
 * /programacion:
 *   post:
 *     summary: Crea una nueva programación de actividades
 *     tags: [Programación]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha programada para la actividad
 *               actividad:
 *                 type: string
 *                 description: Nombre de la actividad
 *               responsable:
 *                 type: string
 *                 description: Persona encargada de la actividad
 *     responses:
 *       201:
 *         description: Programación creada con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterProgramacion.post("/programacion", verificarToken, postProgramacion);

/**
 * @swagger
 * /programacion:
 *   get:
 *     summary: Obtiene todas las programaciones registradas
 *     tags: [Programación]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de programaciones obtenida con éxito
 *       401:
 *         description: No autorizado
 */
RouterProgramacion.get("/programacion", verificarToken, getProgramacion);

/**
 * @swagger
 * /programacion/{id}:
 *   get:
 *     summary: Obtiene una programación por ID
 *     tags: [Programación]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la programación a buscar
 *     responses:
 *       200:
 *         description: Programación encontrada con éxito
 *       404:
 *         description: Programación no encontrada
 */
RouterProgramacion.get("/programacion/:id", verificarToken, getIdProgramacion);

/**
 * @swagger
 * /programacion/{id}:
 *   put:
 *     summary: Actualiza una programación por ID
 *     tags: [Programación]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la programación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha actualizada de la actividad
 *               actividad:
 *                 type: string
 *                 description: Actividad actualizada
 *               responsable:
 *                 type: string
 *                 description: Responsable actualizado
 *     responses:
 *       200:
 *         description: Programación actualizada con éxito
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Programación no encontrada
 */
RouterProgramacion.put("/programacion/:id", verificarToken, updateProgramacion);

export default RouterProgramacion;
