import { Router } from 'express';
import {
  listarRolesUsuario,
  AsignarRolUsuario,
  EliminarRolUsuario
} from '../controllers/UsuarioRol.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuario-Roles
 *   description: API para la gestión de roles asignados a los usuarios
 */

/**
 * @swagger
 * /usuario-roles:
 *   get:
 *     summary: Lista todos los roles asignados a los usuarios
 *     tags: [Usuario-Roles]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de roles asignados obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_usuario:
 *                     type: integer
 *                     example: 3
 *                   id_rol:
 *                     type: integer
 *                     example: 1
 */
router.get('/usuario-roles', verificarToken, listarRolesUsuario);

/**
 * @swagger
 * /usuario-roles:
 *   post:
 *     summary: Asigna un rol a un usuario
 *     tags: [Usuario-Roles]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 3
 *               id_rol:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Rol asignado con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.post('/usuario-roles', verificarToken, AsignarRolUsuario);

/**
 * @swagger
 * /usuario-roles/{id}:
 *   delete:
 *     summary: Elimina la asignación de un rol a un usuario por su ID
 *     tags: [Usuario-Roles]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la asignación rol-usuario a eliminar
 *     responses:
 *       200:
 *         description: Rol eliminado con éxito
 *       404:
 *         description: No se encontró la asignación
 */
router.delete('/usuario-roles/:id', verificarToken, EliminarRolUsuario);

export default router;
