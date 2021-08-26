// Define os Schemas do banco de dados

// importa o mongoose
const mongoose = require('mongoose');

// definição do Schemas: tipos de dados dentro do banco de dados
const AnnotationDataSchema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean,
});

// Exporta o nome do banco de dados e seu Schema
module.exports = mongoose.model('annotations', AnnotationDataSchema);
