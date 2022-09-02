const express = require('express');
const path = require ('path');

const router = express.Router();

const familiaController = require('../controllers/familia.controllers.js');

router.get('/Familia', familiaController.getNutrias);

module.exports = router;