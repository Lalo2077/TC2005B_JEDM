const express = require ('express');
const path = require ('path');

const router = express.Router ();

router.use(express.static(path.join(__dirname, '..', 'public')));

const ordenController = require ('../controllers/orden.controller.js');

router.get('/bar', ordenController.getOrden);

router.post('/bar', ordenController.postOrden);

router.get('/consultorio', ordenController.getConsultorio);

router.get('/preguntas', ordenController.getPreguntas);

router.get('/creador', ordenController.getCreador);

router.post('/creador', ordenController.postCreador);

module.exports = router;
