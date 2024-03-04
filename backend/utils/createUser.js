// Exemplo de uso do modelo de usuário para criar um novo usuário
const User = require("../models/User");

async function createUser() {
  try {
    const newUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });
    await newUser.save();
    console.log('Novo usuário criado:', newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error.message);
  }
}
createUser();
