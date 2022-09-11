const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');


router.get('/new', userController.getNuevo);

router.post('/new', userController.postNuevo);

router.get('/logout', userController.logout);

module.exports = router;