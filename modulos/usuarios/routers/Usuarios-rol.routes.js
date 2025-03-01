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
 *               fk_usuario:
 *                 type: integer
 *                 example: 3
 *               fk_rol:
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
 * /usuario-roles/{fk_usuario}/{fk_rol}:
 *   delete:
 *     summary: Elimina la asignación de un rol a un usuario
 *     tags: [Usuario-Roles]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fk_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *       - in: path
 *         name: fk_rol
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol asignado
 *     responses:
 *       200:
 *         description: Rol eliminado con éxito
 *       404:
 *         description: No se encontró la asignación
 */
router.delete('/usuario-roles/:fk_usuario/:fk_rol', verificarToken, EliminarRolUsuario);

export default router;

import pool from '../database/Conexion.js';

export const listarRolesUsuario = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM usuario_rol');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar relaciones' });
  }
};

export const AsignarRolUsuario = async (req, res) => {
  try {
    const { fk_usuario, fk_rol } = req.body;
    
    // Verificar si la relación ya existe
    const existe = await pool.query(
      'SELECT * FROM usuario_rol WHERE fk_usuario = $1 AND fk_rol = $2',
      [fk_usuario, fk_rol]
    );

    if (existe.rows.length > 0) {
      return res.status(400).json({ message: 'La relación ya existe' });
    }

    await pool.query(
      'INSERT INTO usuario_rol (fk_usuario, fk_rol) VALUES ($1, $2)',
      [fk_usuario, fk_rol]
    );

    res.status(201).json({ message: 'Rol asignado al usuario' });
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const EliminarRolUsuario = async (req, res) => {
  try {
    const { fk_usuario, fk_rol } = req.params;
    const { rowCount } = await pool.query(
      'DELETE FROM usuario_rol WHERE fk_usuario = $1 AND fk_rol = $2',
      [fk_usuario, fk_rol]
    );

    rowCount > 0
      ? res.status(200).json({ message: 'Relación eliminada' })
      : res.status(404).json({ message: 'Relación no encontrada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar' });
  }
};
