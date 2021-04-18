const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "sulist.tarefas@gmail.com",
        pass: ""
    },
});

transporter.sendMail({
    from: "Sulist <sulist.tarefas@gmail.com>",
    to: "sulist.tarefas@gmail.com",
    subject: "Olá, vem conferir suas tarefas",
    text: "Opa! Você não tem tarefas cadastradas",
    html: "Opa! Você não tem tarefas cadastradas, vem com a gente cadastrar novas tarefas!!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})