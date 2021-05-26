const path = require('path');
const express = require('express');
const app = express();
const rotas = require('./rotas')

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.use(rotas);

app.listen(3000, () => {console.log('Rodando...')});

