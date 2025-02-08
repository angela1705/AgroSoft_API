import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Usuarios from './src/routers/Usuariso.router.js';
import permisos from './src/routers/Permisos.routes.js';
import rolPermiso from './src/routers/Rol-permiso.routes.js';
import roles from './src/routers/Roles.routes.js';
import usuarioRol from './src/routers/Usuarios-rol.routes.js';
import autenticacion from './src/routers/Autenticacion.router.js';
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api', Usuarios);
console.log('Ruta cargada: /api/Usuarios');

app.use('/api', permisos);
console.log('Ruta cargada: /api/Permisos');

app.use('/api', rolPermiso);
console.log('Ruta cargada: /api/RolPermiso');

app.use('/api', roles);
console.log('Ruta cargada: /api/Roles');

app.use('/api', usuarioRol);
console.log('Ruta cargada: /api/UsuarioRol');

app.use('/api', autenticacion);
console.log('Ruta cargada: /api/Autenticacion');
app.use('/api', autenticacion);


//configuracion del motor de plantilla ejs
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get ('/documents',(req, resp)=>{
    resp.render('documents.ejs')
})

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');


});