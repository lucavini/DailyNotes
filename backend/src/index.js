const express = require('express');
const app = express();
require('./config/dbConfig');


// indica ao express o que usar nas requisições
app.use(express.json());

// Solicitação de get para a rota principal
app.get('/', (request, response) => {
  return response.json({
      nome:'lucas',
      idade:25
  });
});

app.listen(3333);
