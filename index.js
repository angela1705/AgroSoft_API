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

// Rutas del módulo Inventario
import Bodega from './modulos/inventario/routers/Bodega.Router.js';
import Bodega_Herramienta from './modulos/inventario/routers/BodegaHerramienta.Router.js';
import Bodega_Insumo from './modulos/inventario/routers/BodegaInsumo.Router.js';
import Herramientas from './modulos/inventario/routers/Herramientas.Router.js';
import Insumos from './modulos/inventario/routers/Insumos.Router.js';
import Semilleros from './modulos/inventario/routers/Semillero.Router.js';
import Semillero_Insumo from './modulos/inventario/routers/SemilleroInsumo.Router.js';

// Rutas del módulo IoT
import bancal from "./modulos/IoT/router/router.bancal.js";
import configuracion from "./modulos/IoT/router/router.configuracion.js";
import datosMeteorologicos from "./modulos/IoT/router/router.datos_meteorologicos.js";
import lotes from "./modulos/IoT/router/router.lotes.js";
import sensores from "./modulos/IoT/router/router.sensores.js";
import sensor_bancal from "./modulos/IoT/router/router.sensor_bancal.js";

const app = express();

// Configuración de middleware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Uso de las rutas Usuarios
app.use('/api', Usuarios);
app.use('/api', Permisos);
app.use('/api', RolPermiso);
app.use('/api', Roles);
app.use('/api', UsuarioRol);
app.use('/api', Autenticacion);

// Uso de las rutas Inventario
app.use('/api/inv', Bodega);
app.use('/api/inv', Bodega_Herramienta);
app.use('/api/inv', Bodega_Insumo);
app.use('/api/inv', Herramientas);
app.use('/api/inv', Insumos);
app.use('/api/inv', Semilleros);
app.use('/api/inv', Semillero_Insumo);

// Uso de las rutas IoT
app.use('/api/iot', bancal);
app.use('/api/iot', configuracion);
app.use('/api/iot', datosMeteorologicos);
app.use('/api/iot', lotes);
app.use('/api/iot', sensores);
app.use('/api/iot', sensor_bancal);

// Configuración del motor de plantilla EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/documents', (req, resp) => {
    resp.render('documents.ejs');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
