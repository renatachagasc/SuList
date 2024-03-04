const nodemailer = require("nodemailer");

exports.sendEmailList = async (listaDeTarefas) => {
  // Configurar o nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "seu-email",
      pass: "senha",
    },
  });

  // Configurar o email
  const mailOptions = {
    from: "seu-email",
    to: "email-destino",
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
  await transporter.sendMail(mailOptions);
};
