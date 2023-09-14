import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs';
import 'dotenv/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = process.env.PORT;


//handdle bars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'))

app.get('/',  (req, res)=> {
    res.render('home',{
        nombre: 'Silene Casma',
        titulo: 'Curso de Node'
    });
})

app.get('/generic',  (req, res)=> {
    res.render('generic',{
        nombre: 'Silene Casma',
        titulo: 'Curso de Node'
    })
})
app.get('/elements',  (req, res)=> {
    res.render('elements',{
        nombre: 'Silene Casma',
        titulo: 'Curso de Node'
    })
})
app.get('*', (req, res)=> {
    res.sendFile(__dirname+ '/public/back/404.html')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});