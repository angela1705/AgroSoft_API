import verificarToken from "../../usuarios/middlewares/verificarToken.js";
import { Router } from "express";
import { postDatoMeteorologico, getDatosMeteorologicos, IdDatoMeteorologico, actualizarDatoMeteorologico } from "../controller/controller.datos_meteorologicos.js";
const RouterDatosMeteorologicos = Router();

RouterDatosMeteorologicos.post("/datosmeteorologicos",verificarToken, postDatoMeteorologico);
RouterDatosMeteorologicos.get("/datosmeteorologicos",verificarToken, getDatosMeteorologicos);
RouterDatosMeteorologicos.get("/datosmeteorologicos/:id_dato_meteorologico",verificarToken, IdDatoMeteorologico);
RouterDatosMeteorologicos.put("/datosmeteorologicos/:id_dato_meteorologico",verificarToken, actualizarDatoMeteorologico);

export default RouterDatosMeteorologicos;

