const express = require('express');
const path = require ('path');

const router = express.Router();

const creadorController = require('../controllers/creador.controllers.js');

router.get('/creador', creadorController.getNewNutria);

router.post('/creador', creadorController.postNewNutria);

router.get('/', creadorController.getNutrias);

module.exports = router;