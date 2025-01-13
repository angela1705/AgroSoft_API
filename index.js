import  express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app= express();
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});
