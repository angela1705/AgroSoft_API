import { Router } from "express";
import {
    registrarProducto,
    listarProductos,
    actualizarProducto,
    eliminarProducto,
} from "../controllers/inventarioProductoController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaInventario = Router();

rutaInventario.get("/inventario", verificarToken, listarProductos);
rutaInventario.post("/inventario", verificarToken, registrarProducto);
rutaInventario.put("/inventario/:id_producto", verificarToken, actualizarProducto);
rutaInventario.delete("/inventario/:id_producto", verificarToken, eliminarProducto);

export default rutaInventario;
