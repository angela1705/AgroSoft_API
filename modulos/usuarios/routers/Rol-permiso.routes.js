import express from 'express';
import { 
  listarPermisosRol, 
  AsignarPermisoRol, 
  EliminarPermisoRol 
} from '../controllers/RolPermiso.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = express.Router();

router.get('/rol-permiso', listarPermisosRol);
router.post('/rol-permiso', verificarToken, AsignarPermisoRol);
router.delete('/rol-permiso/:fk_rol/:fk_permiso', verificarToken, EliminarPermisoRol);

export default router;