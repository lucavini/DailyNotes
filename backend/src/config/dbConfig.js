// Conecta o banco de dados ao backend
const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://user:user@cluster0.srltq.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;