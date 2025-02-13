import { Router } from "express";
import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { 
    postResiduos, 
    getResiduos, 
    getIdResiduos, 
    updateResiduos 
} from "../controller/controller.residuos.js";

const RouterResiduos = Router();

/**
 * @swagger
 * tags:
 *   name: Residuos
 *   description: Gestión de residuos agrícolas
 */

/**
 * @swagger
 * /residuos:
 *   post:
 *     summary: Crea un nuevo residuo agrícola
 *     tags: [Residuos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 description: Tipo de residuo
 *               cantidad:
 *                 type: number
 *                 description: Cantidad de residuos en kg
 *               metodo_disposicion:
 *                 type: string
 *                 description: Método de disposición del residuo
 *     responses:
 *       201:
 *         description: Residuo creado con éxito
 *       400:
 *         description: Error en la solicitud
 */
RouterResiduos.post("/residuos", verificarToken, postResiduos);

/**
 * @swagger
 * /residuos:
 *   get:
 *     summary: Obtiene todos los residuos registrados
 *     tags: [Residuos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de residuos obtenida con éxito
 *       401:
 *         description: No autorizado
 */
RouterResiduos.get("/residuos", verificarToken, getResiduos);

/**
 * @swagger
 * /residuos/{id}:
 *   get:
 *     summary: Obtiene un residuo por ID
 *     tags: [Residuos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del residuo a buscar
 *     responses:
 *       200:
 *         description: Residuo encontrado con éxito
 *       404:
 *         description: Residuo no encontrado
 */
RouterResiduos.get("/residuos/:id", verificarToken, getIdResiduos);

/**
 * @swagger
 * /residuos/{id}:
 *   put:
 *     summary: Actualiza un residuo por ID
 *     tags: [Residuos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del residuo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 description: Tipo de residuo actualizado
 *               cantidad:
 *                 type: number
 *                 description: Cantidad de residuos actualizada en kg
 *               metodo_disposicion:
 *                 type: string
 *                 description: Método de disposición actualizado
 *     responses:
 *       200:
 *         description: Residuo actualizado con éxito
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Residuo no encontrado
 */
RouterResiduos.put("/residuos/:id", verificarToken, updateResiduos);

export default RouterResiduos;
