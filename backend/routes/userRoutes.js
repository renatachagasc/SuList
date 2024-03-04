const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota de cadastro de usuário
router.post('/cadastro', userController.registerUser);

module.exports = router;

