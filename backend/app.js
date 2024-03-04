const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require('./config/db');
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const emailRoutes = require('./routes/emailRoutes');
app.use('/api/email', emailRoutes);

// Porta
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Servidor SuList ouvindo na porta ${PORT}`);
});
