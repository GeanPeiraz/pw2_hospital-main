const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const pacienteController = require('./controller/pacienteController');
app.use('/', pacienteController);

app.listen(3000, ()=>{ 
    console.log('Rodando, graças a Deus'); 
});