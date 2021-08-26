// Definir as rotas das requisições

// importa e usa as funções de rotas do express
const express = require('express');
const routes = express.Router();

// Importa as funções do controller
// para cada tipo de requisição(rota)
const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

// Rota Annotations
routes.get('/annotations', AnnotationController.read);
routes.post('/annotations', AnnotationController.create);
routes.delete('/annotations/:id',AnnotationController.delete);

// Rota Priority
routes.get('/priorities',PriorityController.read);
routes.post('/priorities/:id',PriorityController.update);

// Rota Content
routes.post('/contents/:id',ContentController.update);


// exporta as rotas definidas
module.exports = routes;
