import { Router } from "express";
import {
    registrarInventarioProducto,
    listarInventarioProducto,
    actualizarInventarioProducto,
    eliminarInventarioProducto,
} from "../controllers/inventarioProductoController.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaInventario = Router();

rutaInventario.get("/inventario", verificarToken, listarInventarioProducto);
rutaInventario.post("/inventario", verificarToken, registrarInventarioProducto);
rutaInventario.put("/inventario/:id", verificarToken, actualizarInventarioProducto);
rutaInventario.delete("/inventario/:id", verificarToken, eliminarInventarioProducto);

export default rutaInventario;
