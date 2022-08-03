var express = require('express');
var app = express(); // declaração variável express 

app.set('view engine', 'ejs'); // setando engine para ejs
app.use(express.static('public')); // criando pasta pública

app.get('/', function(req, res) {
    res.render('../views/index');
}); // mapeando a raiz para index

app.get('/page3', function(req, res) {
    res.render('../views/page3');
}); 

app.get('/page2', function(req, res) {
    res.render('../views/page2');
}); 

app.get('/page1', function(req, res) {
    res.render('../views/page1');
}); 

app.listen(3004, function() {
    console.log('Executando na porta 3004');
}); // porta que irá rodar