import { Router } from "express";
import { postDatoMeteorologico, getDatosMeteorologicos, IdDatoMeteorologico, actualizarDatoMeteorologico } from "../controller/controller.datos_meteorologicos.js";
const RouterDatosMeteorologicos = Router();

RouterDatosMeteorologicos.post("/datosmeteorologicos", postDatoMeteorologico);
RouterDatosMeteorologicos.get("/datosmeteorologicos", getDatosMeteorologicos);
RouterDatosMeteorologicos.get("/datosmeteorologicos/:id_dato_meteorologico", IdDatoMeteorologico);
RouterDatosMeteorologicos.put("/datosmeteorologicos/:id_dato_meteorologico", actualizarDatoMeteorologico);

export default RouterDatosMeteorologicos;

