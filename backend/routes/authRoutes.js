const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Endpoint de login
router.post('/login', authController.loginUser);

const { isAuthenticated } = require('../middleware/authMiddleware');

// Rota protegida que requer autenticação
router.get('/sulist', isAuthenticated, (req, res) => {
  // Se o usuário estiver autenticado, renderize a página de perfil
  res.render('sulist');
});

module.exports = router;

