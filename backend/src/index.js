// importa o express como servidor e as rotas criadas
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// Usa o express como servidor
// e importa as configurações de conexao com o banco de dados
const app = express();
require('./config/dbConfig');

// indica ao express o que usar nas requisições
// e manda utilizar as rotas importadas
app.use(cors());
app.use(express.json());
app.use(routes);

// indica a porta de conexao
app.listen(3333);
