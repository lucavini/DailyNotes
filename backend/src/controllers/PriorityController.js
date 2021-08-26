// Define como lidar com as requisições de prioridade

// Importa o banco de dados e seus Schemas
const Annotations = require('../models/AnnotationsData');

// Definite e Exporta as funções para cada tipo de requisições(rota)
module.exports = {
  async read(request, response) {
    const priority = request.query;
    const priorityNotes = await Annotations.find(priority);

    return response.json(priorityNotes);
  },

  async update(request, response) {
    const { id } = request.params;
    const annotation = await Annotations.findOne({ _id: id });

    if (annotation.priority) annotation.priority = false;
    else annotation.priority = true;

    await annotation.save();

    return response.json(annotation);
  },
};
