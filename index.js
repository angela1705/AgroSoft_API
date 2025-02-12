import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Usuarios from './modulos/usuarios/routers/Usuariso.router.js';
import Permisos from './modulos/usuarios/routers/Permisos.routes.js';
import RolPermiso from './modulos/usuarios/routers/Rol-permiso.routes.js';  
import Roles from './modulos/usuarios/routers/Roles.routes.js';  
import UsuarioRol from './modulos/usuarios/routers/Usuarios-rol.routes.js';  
import Autenticacion from './modulos/usuarios/routers/Autenticacion.router.js';  
import Bodega from './modulos/inventario/routers/Bodega.Router.js';
import BodegaHerramienta from './modulos/inventario/routers/BodegaHerramienta.Router.js';
import BodegaInsumo from './modulos/inventario/routers/BodegaInsumo.Router.js';
import Herramienta from './modulos/inventario/routers/Herramientas.Router.js';
import Insumos from './modulos/inventario/routers/Insumos.Router.js';
import Semillero from './modulos/inventario/routers/Semillero.Router.js';
import SemilleroInsumo from './modulos/inventario/routers/SemilleroInsumo.Router.js';

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Rutas de usuarios
app.use('/api', Usuarios);
console.log('Ruta cargada: /api/Usuarios');

app.use('/api', Permisos);
console.log('Ruta cargada: /api/Permisos');

app.use('/api', RolPermiso);
console.log('Ruta cargada: /api/RolPermiso');

app.use('/api', Roles);
console.log('Ruta cargada: /api/Roles');

app.use('/api', UsuarioRol);
console.log('Ruta cargada: /api/UsuarioRol');

app.use('/api', Autenticacion);
console.log('Ruta cargada: /api/Autenticacion');

app.use('/api', Bodega)
console.log('Ruta cargada: /api/Bodega')

app.use('/api', BodegaHerramienta);
console.log('Ruta cargada: /api/BodegaHerramienta')

app.use('/api', BodegaInsumo)
console.log('Ruta cargada: /api/BodegaInsumo')

app.use('/api', Herramienta)
console.log('Ruta cargada: /api/Herramienta')

app.use('/api', Insumos)
console.log('Ruta cargada: /api/Insumos')

app.use('/api', Semillero)
console.log('Ruta cargada: /api/Semillero')

app.use('/api', SemilleroInsumo);
console.log('Ruta cargada: /api/SemilleroInsumo')

// Configuración del motor de plantilla ejs
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/documents', (req, resp) => {
    resp.render('documents.ejs');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
