const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Bem vindo ao Node!');
  });

  app.listen(8080, function(){
      console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
  });