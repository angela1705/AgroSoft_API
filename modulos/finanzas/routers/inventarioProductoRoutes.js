import { Router } from "express";
import {
    registrarInventarioProducto,
    listarInventarioProducto,
    actualizarInventarioProducto,
    eliminarInventarioProducto,
} from "../controllers/inventarioProductoController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaInventario = Router();

/**
 * @swagger
 * tags:
 *   name: Inventario
 *   description: Endpoints para gestionar el inventario de productos
 */

/**
 * @swagger
 * /inventario:
 *   get:
 *     summary: Obtener la lista de productos en el inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos en inventario obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_producto:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Tomate"
 *                   cantidad:
 *                     type: integer
 *                     example: 50
 *                   precio:
 *                     type: number
 *                     example: 1200.50
 */
rutaInventario.get("/inventario", verificarToken, listarInventarioProducto);

/**
 * @swagger
 * /inventario:
 *   post:
 *     summary: Registrar un nuevo producto en el inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Lechuga"
 *               cantidad:
 *                 type: integer
 *                 example: 100
 *               precio:
 *                 type: number
 *                 example: 850.75
 *     responses:
 *       201:
 *         description: Producto registrado correctamente en el inventario
 */
rutaInventario.post("/inventario", verificarToken, registrarInventarioProducto);

/**
 * @swagger
 * /inventario/{id_producto}:
 *   put:
 *     summary: Actualizar un producto en el inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Lechuga"
 *               cantidad:
 *                 type: integer
 *                 example: 120
 *               precio:
 *                 type: number
 *                 example: 900.00
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 */
rutaInventario.put("/inventario/:id_producto", verificarToken, actualizarInventarioProducto);

/**
 * @swagger
 * /inventario/{id_producto}:
 *   delete:
 *     summary: Eliminar un producto del inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 */
rutaInventario.delete("/inventario/:id_producto", verificarToken, eliminarInventarioProducto);

export default rutaInventario;
