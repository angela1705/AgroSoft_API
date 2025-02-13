import { Router } from "express";
import CrearToken from "../controllers/Autenticacion.controller.js";

const ruta = Router();

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: API para autenticación de usuarios
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica un usuario y genera un token JWT
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "admin"
 *               contraseña:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Autenticación exitosa, devuelve el token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credenciales inválidas
 */
ruta.post("/login", CrearToken);

export default ruta;
