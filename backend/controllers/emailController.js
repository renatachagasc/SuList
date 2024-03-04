const emailService = require('../services/emailService');

exports.sendEmailList = async (req, res) => {
  try {
    const { listaDeTarefas } = req.body;
    await emailService.sendEmailList(listaDeTarefas);
    res.status(200).send("Lista de emails enviada com sucesso.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao enviar a lista de emails.");
  }
};
