import express from 'express';
import { 
  listarRolesUsuario, 
  AsignarRolUsuario, 
  EliminarRolUsuario 
} from '../controllers/UsuarioRol.controllers.js';

const router = express.Router();

router.get('/usuario-rol', listarRolesUsuario);
router.post('/usuario-rol', AsignarRolUsuario);
router.delete('/usuario-rol/:fk_usuario/:fk_rol', EliminarRolUsuario);

export default router;