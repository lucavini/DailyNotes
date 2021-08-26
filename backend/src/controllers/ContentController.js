// Define como lidar com as requisições de prioridade

// Importa o banco de dados e seus Schemas
const Annotations = require('../models/AnnotationsData');

// Definite e Exporta as funções para cada tipo de requisições(rota)
module.exports = {
  async update(request, response) {
    const { id } = request.params;
    const { notes } = request.body;

    const annotation = await Annotations.findOne({ _id: id });
    annotation.notes = notes;
    await annotation.save();

    return response.json(annotation);
  },
};
