<template>
  <!-- Container do formulário de login -->
  <div class="login-container">
    <!-- Formulário de login -->
    <form @submit.prevent="login" class="login-form">
      <!-- Campo de usuário -->
      <div class="form-group">
        <label for="email" class="label">Usuário:</label>
        <input type="text" id="email" v-model="email" class="input">
      </div>
      <!-- Campo de senha -->
      <div class="form-group">
        <label for="password" class="label">Senha:</label>
        <input type="password" id="password" v-model="password" class="input">
      </div>
      <!-- Botão de login -->
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
    <!-- Mensagem de erro -->
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast } from 'buefy';

export default {
  // Dados do componente
  data() {
    return {
      email: '', // Nome de usuário
      password: '', // Senha
      error: ''     // Mensagem de erro
    };
  },
  // Métodos do componente
  methods: {
    // Método para realizar o login
    login() {
      fetch('http://localhost:4200/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao fazer login do usuário');
        }
      })
      .then(data => {
        console.log('Resposta do servidor:', data);
        // Limpe os campos do formulário após o envio bem-sucedido
        this.email = '';
        this.password = '';
        Toast.open({
            message: 'Login com sucesso!',
            type: 'is-success'
          });
        // Se a autenticação for bem-sucedida, redirecione para a página principal
        this.$router.push('/sulist');
      })
      .catch(error => {
        Toast.open({
            message: 'Erro ao fazer login',
            type: 'is-danger'
          });
        console.error('Erro ao fazer login:', error);
        // Trate o erro e exiba uma mensagem de erro para o usuário
        this.error = 'Usuário ou senha incorretos.';
      });
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente */
.login-container {
  background-color: #00C699;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  background-color: #fff;
  width: 300px;
  max-width: 100%;
  padding: 60px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #00d1b2;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #F14975;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #f7cd34;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
