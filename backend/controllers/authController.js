const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Procura o usuário no banco de dados pelo email fornecido
    const user = await User.findOne({ email });

    // Verifica se o usuário foi encontrado e se a senha está correta
    if (user && await bcrypt.compare(password, user.password)) {
      // Gera um token de autenticação para o usuário
      const token = jwt.sign({ userId: user._id }, 'seu_segredo_secreto', { expiresIn: '1h' }); // Defina o segredo e o tempo de expiração do token conforme necessário

      // Retorna o token e uma mensagem de sucesso
      res.json({ message: 'Login bem-sucedido', token });
    } else {
      // Se as credenciais estiverem incorretas, retorna um erro de autenticação
      res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
