import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Usuarios from './modulos/usuarios/routers/Usuarios.router.js';
import Permisos from './modulos/usuarios/routers/Permisos.routes.js';
import RolPermiso from './modulos/usuarios/routers/Rol-permiso.routes.js';  
import Roles from './modulos/usuarios/routers/Roles.routes.js';  
import UsuarioRol from './modulos/usuarios/routers/Usuarios-rol.routes.js';  
import Autenticacion from './modulos/usuarios/routers/Autenticacion.router.js';  

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use('/api', Usuarios);
app.use('/api', Permisos);
app.use('/api', RolPermiso);
app.use('/api', Roles);
app.use('/api', UsuarioRol);
app.use('/api', Autenticacion);


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/documents', (req, resp) => {
    resp.render('documents.ejs');
});


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});