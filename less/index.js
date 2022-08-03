var express = require('express');
var app = express(); // declaração variável express 

app.set('view engine', 'ejs'); // setando engine para ejs
app.use(express.static('public')); // criando pasta pública

app.get('/', function(req, res) {
    res.render('../views/index');
}); // mapeando a raiz para index

app.get('/outrotexto', function(req, res) {
    res.render('../views/outrotexto');
}); 


app.listen(3001, function() {
    console.log('Executando na porta 3001');
}); // porta que irá rodar