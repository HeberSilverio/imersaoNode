const express = require('express');
const app = express();

app.use(express.json());

app.get('/usuarios', function (req, res) {
    res.json({
        erro: false,
        messagem: "Listar Usuários"
    });
  });
  
  app.post('/login', function (req, res) {
     // console.log(req.body.senha);
     if(req.body.usuario === 'hebersilverio@gmail.com' && req.body.senha === '123456'){
        res.json({
            erro: false,
            messagem: "Login válido!",
            dados: req.body
        });
     }
    res.json({
        erro: true,
        messagem: "Login ou senha incorreto!",
        dados: req.body
    });
  });

  app.listen(8080, function(){
      console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
  });