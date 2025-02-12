import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import bancal from "./modulos/cultivo/router/router.fase_lunar.js";
import cultivoLuna from "./modulos/cultivo/router/router.cultivo_luna.js";
import plantaciones from "./modulos/cultivo/router/router.plantaciones.js";
import tipoPlaga from "./modulos/cultivo/router/router.tipo_plaga.js";
import plagas from "./modulos/cultivo/router/router.plagas.js";
import afecciones from "./modulos/cultivo/router/router.afecciones.js";
import productosControl from "./modulos/cultivo/router/router.productos_control.js";
import tiposControl from "./modulos/cultivo/router/router.tipos_control.js";
import controles from "./modulos/cultivo/router/router.controles.js";
import tareas from "./modulos/cultivo/router/router.tareas.js";
import programacion from "./modulos/cultivo/router/router.programacion.js";
import notificaciones from "./modulos/cultivo/router/router.notificaciones.js";
import tipoActividad from "./modulos/cultivo/router/router.tipo_actividad.js";
import actividades from "./modulos/cultivo/router/router.actividades.js";
import cosechas from "./modulos/cultivo/router/router.cosechas.js";
import tiposResiduo from "./modulos/cultivo/router/router.tipos_residuo.js";
import residuos from "./modulos/cultivo/router/router.residuos.js";
import tipoEspecie from "./modulos/cultivo/router/router.tipo_especie.js";
import especies from "./modulos/cultivo/router/router.especies.js";
import cultivos from "./modulos/cultivo/router/router.cultivos.js";

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/cultivo', bancal);
app.use('/api/cultivo', cultivoLuna);
app.use('/api/cultivo', plantaciones);
app.use('/api/cultivo', tipoPlaga);
app.use('/api/cultivo', plagas);
app.use('/api/cultivo', afecciones);
app.use('/api/cultivo', productosControl);
app.use('/api/cultivo', tiposControl);
app.use('/api/cultivo', controles);
app.use('/api/cultivo', tareas);
app.use('/api/cultivo', programacion);
app.use('/api/cultivo', notificaciones);
app.use('/api/cultivo', tipoActividad);
app.use('/api/cultivo', actividades);
app.use('/api/cultivo', cosechas);
app.use('/api/cultivo', tiposResiduo);
app.use('/api/cultivo', residuos);
app.use('/api/cultivo', tipoEspecie);
app.use('/api/cultivo', especies);
app.use('/api/cultivo', cultivos);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
