const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());

// Configurar o nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "seuemail@gmail.com",
    pass: "senha",
  },
});
// Habilitar o CORS
app.use(cors());

app.post("/email", (req, res) => {
  // Extrair a lista de tarefas do corpo da requisição
  const { listaDeTarefas } = req.body;

  // Configurar o email
  const mailOptions = {
    from: "seuemail@gmail.com",
    to: "emaildestino@gmail.com",
    subject: "Lista de Tarefas (SuList)",
    html: `<h1>Lista de Tarefas</h1>
           <ul>
             ${listaDeTarefas
               .map(
                 (tarefa) => `<li>${tarefa.titulo}: 
                 <ul>
                     ${
                       typeof tarefa.descricao === "string"
                         ? tarefa.descricao
                             .split(",")
                             .map((desc) => `<li>${desc.trim()}</li>`)
                             .join("")
                         : `<li>${tarefa.descricao}</li>`
                     }
                   </ul>
                 </li>`
               )
               .join("")}
           </ul>`,
  };

  // Enviar o email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Erro ao enviar o email.");
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send("Email enviado com sucesso.");
    }
  });
});

app.listen(4200, () => {
  console.log("Servidor Express ouvindo na porta 4200");
});
