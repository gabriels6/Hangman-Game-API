const { Router } = require('express');
const WordController = require('../Controller/WordController');

const routes = Router();

routes.get('/:word',WordController.getWordFromNumber);
routes.get('/',WordController.getRandomWord);

module.exports = routes;