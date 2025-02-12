import { Router } from 'express';
import {
  listarUsuarios,
  RegistrarUsuarios,
  ActualizarUsuarios,
  EliminarUsuarios,
  BuscarUsuarios,
} from '../controllers/Usuarios.controllers.js';

import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

router.get('/usuarios', listarUsuarios);
router.post('/usuarios', verificarToken, RegistrarUsuarios);
router.put('/usuarios/:id', verificarToken, ActualizarUsuarios);
router.delete('/usuarios/:id', verificarToken, EliminarUsuarios);
router.get('/usuarios/:identificacion', BuscarUsuarios);

export default router;