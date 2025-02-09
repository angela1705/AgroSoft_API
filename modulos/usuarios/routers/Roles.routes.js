import { Router } from 'express';
import {
  listarRoles,
  RegistrarRoles,
  ActualizarRoles,
  EliminarRoles
} from '../controllers/Roles.controllers.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = Router();

router.get('/roles', listarRoles);
router.post('/roles', verificarToken, RegistrarRoles);
router.put('/roles/:id', verificarToken, ActualizarRoles);
router.delete('/roles/:id', verificarToken, EliminarRoles);

export default router;