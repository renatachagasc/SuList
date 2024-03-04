const bcrypt = require('bcryptjs');
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe no banco de dados
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "O usuário já está cadastrado." });
    }

    // Criptografar a senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10); // O segundo parâmetro é o número de rounds de hashing

    let user = new User({
      name,
      email,
      password: hashedPassword, // Salvar a senha criptografada
    });

    // Salvar o usuário no banco de dados
    await user.save();
    console.log("Usuário cadastrado com sucesso!");

    res.status(201).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erro do servidor");
  }
};
