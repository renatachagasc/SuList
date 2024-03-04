// middleware/authMiddleware.js

// Função de middleware para verificar se o usuário está autenticado
const isAuthenticated = (req, res, next) => {
    // Verificar se o usuário está autenticado
    if (req.isAuthenticated()) {
      // Se o usuário estiver autenticado, avance para a próxima middleware
      return next();
    } else {
      // Se o usuário não estiver autenticado, redirecione para a página de login
      res.redirect('/login');
    }
  };
  
  // Exportar a função de middleware para uso em outras partes da aplicação
  module.exports = {
    isAuthenticated,
  };
  