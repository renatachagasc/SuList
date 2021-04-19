const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "sulist.tarefas@gmail.com",
        pass: "S#taref987"
    },
});

transporter.sendMail({
    from: "Sulist <sulist.tarefas@gmail.com>",
    to: "sulist.tarefas@gmail.com",
    subject: "SuList ✔ Olá, vem conferir suas tarefas",
    text: "Opa! Você não tem tarefas cadastradas",
    html: "<b>Opa!</p> Você não tem tarefas cadastradas, vem com a gente cadastrar novas tarefas!!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})