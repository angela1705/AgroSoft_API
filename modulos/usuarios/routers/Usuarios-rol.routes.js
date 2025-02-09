import { Router } from 'express';
import {
  listarRolesUsuario,
  AsignarRolUsuario,
  EliminarRolUsuario
} from '../controllers/UsuarioRol.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

router.get('/usuario-roles', listarRolesUsuario);
router.post('/usuario-roles', verificarToken, AsignarRolUsuario);
router.delete('/usuario-roles/:id', verificarToken, EliminarRolUsuario);

export default router;