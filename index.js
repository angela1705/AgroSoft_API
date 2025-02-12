import  express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

/* Rutas del modulo IOT */
import bancal from "./modulos/IoT/router/router.bancal.js";
import configuracion from "./modulos/IoT/router/router.configuracion.js";
import datosMeteorologicos from "./modulos/IoT/router/router.datos_meteorologicos.js";
import lotes from "./modulos/IoT/router/router.lotes.js";
import sensores from "./modulos/IoT/router/router.sensores.js";
import sensor_bancal from "./modulos/IoT/router/router.sensor_bancal.js";

const app= express();
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

/* Uso de las rutas IOT */
app.use(bancal);
app.use(configuracion);
app.use(datosMeteorologicos);
app.use(lotes);
app.use(sensores);
app.use(sensor_bancal);


app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});
