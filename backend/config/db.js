const mongoose = require('mongoose');

const connectDB = async () => {
  const db = 'db_sulist'
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${db}`);
    
    console.log('MongoDB conectado...');
  } catch (err) {
    console.error('Não foi possível conectar ao MongoDB:', err.message);
    process.exit(1); // Encerrar o processo em caso de falha na conexão
  }
};

module.exports = connectDB;
