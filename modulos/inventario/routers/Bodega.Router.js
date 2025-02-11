import { Router } from "express";
import {
    registrarBodega,
    listarBodega,
    actualizarBodega,
    eliminarBodega,
} from "../controllers/Bodega.Controller.js";

import verificarToken from "../../usuarios/middlewares/verificarToken.js";

const rutaBodega = Router();

rutaBodega.get("/bodega", listarBodega);
rutaBodega.post("/bodega", registrarBodega);
rutaBodega.put("/bodega/:id_bodega", verificarToken, actualizarBodega);
rutaBodega.delete("/bodega/:id_bodega", verificarToken, eliminarBodega);

export default rutaBodega;