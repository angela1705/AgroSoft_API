import {Router} from "express";
import CrearToken from '../controllers/Autenticacion.controller.js';

const ruta =Router();

ruta.post('/login',CrearToken);

export default ruta;