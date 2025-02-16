import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// Rutas del módulo Usuarios
import Usuarios from './modulos/usuarios/routers/Usuariso.router.js';
import Permisos from './modulos/usuarios/routers/Permisos.routes.js';
import RolPermiso from './modulos/usuarios/routers/Rol-permiso.routes.js';
import Roles from './modulos/usuarios/routers/Roles.routes.js';
import UsuarioRol from './modulos/usuarios/routers/Usuarios-rol.routes.js';
import Autenticacion from './modulos/usuarios/routers/Autenticacion.router.js';

// Rutas del módulo IoT
import bancal from "./modulos/IoT/router/router.bancal.js";
import configuracion from "./modulos/IoT/router/router.configuracion.js";
import datosMeteorologicos from "./modulos/IoT/router/router.datos_meteorologicos.js";
import lotes from "./modulos/IoT/router/router.lotes.js";
import sensores from "./modulos/IoT/router/router.sensores.js";
import sensor_bancal from "./modulos/IoT/router/router.sensor_bancal.js";
import tipo_sensor from "./modulos/IoT/router/router.tipo_sensor.js"

const app = express();

// Configuración de middleware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Uso de las rutas IoT
app.use('/api/iot', bancal);
app.use('/api/iot', configuracion);
app.use('/api/iot', datosMeteorologicos);
app.use('/api/iot', lotes);
app.use('/api/iot', sensores);
app.use('/api/iot', sensor_bancal);
app.use('/api/iot', tipo_sensor)

// Uso de las rutas Usuarios
app.use('/api', Usuarios);
app.use('/api', Permisos);
app.use('/api', RolPermiso);
app.use('/api', Roles);
app.use('/api', UsuarioRol);
app.use('/api', Autenticacion);

// Configuración del motor de plantilla EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/documents', (req, resp) => {
    resp.render('documents.ejs');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
