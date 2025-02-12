import verificarToken from "../../usuarios/middlewares/verificarToken.js"
import { listarInsumos, registrarInsumo, actualizarInsumo, eliminarInsumo } from "../controllers/Insumos.Controller.js"
const rutaInsumos = Router()

rutaInsumos.get("/insumos", verificarToken, listarInsumos)
rutaInsumos.post("/insumos", verificarToken, registrarInsumo)
rutaInsumos.put("/insumos/:id_insumo", verificarToken, actualizarInsumo)
rutaInsumos.delete("/insumos/:id_insumo", verificarToken, eliminarInsumo)

export default rutaInsumos;