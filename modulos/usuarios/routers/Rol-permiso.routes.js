import { Router } from 'express';
import {
  listarPermisosRol,
  AsignarPermisoRol,
  EliminarPermisoRol
} from '../controllers/RolPermiso.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: RolPermisos
 *   description: API para la gestión de permisos asignados a roles
 */

/**
 * @swagger
 * /rol-permisos:
 *   get:
 *     summary: Lista los permisos asignados a los roles
 *     tags: [RolPermisos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de permisos asignados a roles obtenida con éxito
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
 *                   rol_id:
 *                     type: integer
 *                     example: 2
 *                   permiso_id:
 *                     type: integer
 *                     example: 5
 */
router.get('/rol-permisos', listarPermisosRol);

/**
 * @swagger
 * /rol-permisos:
 *   post:
 *     summary: Asigna un permiso a un rol
 *     tags: [RolPermisos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rol_id:
 *                 type: integer
 *                 example: 3
 *               permiso_id:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       201:
 *         description: Permiso asignado con éxito al rol
 *       400:
 *         description: Error en la solicitud
 */
router.post('/rol-permisos', verificarToken, AsignarPermisoRol);

/**
 * @swagger
 * /rol-permisos/{id}:
 *   delete:
 *     summary: Elimina un permiso de un rol
 *     tags: [RolPermisos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del permiso asignado al rol
 *     responses:
 *       200:
 *         description: Permiso eliminado con éxito del rol
 *       404:
 *         description: Permiso no encontrado
 */
router.delete('/rol-permisos/:id', verificarToken, EliminarPermisoRol);

export default router;
