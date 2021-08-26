// Define como lidar com as requisições vindas do front-end

// Importa o banco de dados e seus Schemas
const Annotations = require('../models/AnnotationsData');

// Definite e Exporta as funções para cada tipo de requisições(rota)
module.exports = {
  // rota get /annoations
  async read(request, response) {
    const annotationsList = await Annotations.find();
    return response.json(annotationsList);
  },

  // rota post /annoations
  async create(request, response) {
    const { title, notes, priority } = await request.body;

    if (!title || !notes) {
      return response
        .status(401)
        .json({ error: 'necessário um titulo/prioridade!' });
    }

    const annotationCreated = await Annotations.create({
      title,
      notes,
      priority,
    });
    return response.json(annotationCreated);
  },

  // rota delete /annoations/:id
  async delete(request, response) {
    const { id } = request.params;
    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });

    if (annotationDeleted) {
      return response.json(annotationDeleted);
    } else {
      return response
        .status(401)
        .json({ error: 'Não foi encontrado o registro para deletar!' });
    }
  },


};
