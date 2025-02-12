import { Router } from 'express';
import {
  listarPermisos,
  RegistrarPermisos,
  ActualizarPermisos,
  EliminarPermisos
} from '../controllers/Permisos.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

router.get('/permisos', listarPermisos);
router.post('/permisos', verificarToken, RegistrarPermisos);
router.put('/permisos/:id', verificarToken, ActualizarPermisos);
router.delete('/permisos/:id', verificarToken, EliminarPermisos);

export default router;