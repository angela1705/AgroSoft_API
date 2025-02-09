import { Router } from 'express';
import {
  listarPermisosRol,
  AsignarPermisoRol,
  EliminarPermisoRol
} from '../controllers/RolPermiso.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

router.get('/rol-permisos', listarPermisosRol);
router.post('/rol-permisos', verificarToken, AsignarPermisoRol);
router.delete('/rol-permisos/:id', verificarToken, EliminarPermisoRol);

export default router;