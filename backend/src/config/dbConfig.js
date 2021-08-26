// Conecta o banco de dados ao backend

// importa o mongoose
const mongoose = require('mongoose');

// string de conexão com o banco de dados
const dbConfig = 'mongodb+srv://user:user@cluster0.srltq.mongodb.net/annotations?retryWrites=true&w=majority';

// Exporta e realiza a conexão com o banco usando a string e suas flags
const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = connection;
