const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Rota para enviar a lista de tarefas
router.post('/send-list', emailController.sendEmailList);

module.exports = router;
