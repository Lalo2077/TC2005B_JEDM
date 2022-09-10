const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

router.get('/logout', userController.logout);

module.exports = router;