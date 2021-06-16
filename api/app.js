const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors')

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/usuarios', function (req, res) {
    return res.json({
        erro: false,
        messagem: "Listar Usuários"
    });
  });
  
  app.post('/login', function (req, res) {
     // console.log(req.body.senha);
     if(req.body.usuario === 'hebersilverio@gmail.com' && req.body.senha === '123456'){
        const { id } = 1;
        var privatekey = process.env.SECRET;
        var token = jwt.sign({id}, privatekey,{
            expiresIn: 600 //10minutos
        })

        return res.json({
            erro: false,
            messagem: "Login válido!",
            token
        });
     }
    return res.json({
        erro: true,
        messagem: "Login ou senha incorreto!",
        dados: req.body
    });
  });

  app.listen(8080, function(){
      console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
  });