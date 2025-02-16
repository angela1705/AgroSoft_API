import { Router } from 'express';
import CrearToken from '../controllers/Autenticacion.controller.js';

const router = Router();

router.post('/login', CrearToken);

export default router;