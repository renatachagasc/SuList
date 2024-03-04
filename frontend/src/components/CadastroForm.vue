<template>
  <div class="cadastro-container">
    <h2>Cadastro</h2>
    <form @submit.prevent="submitForm" class="cadastro-form">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="userData.name" required>
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="userData.email" required>
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="userData.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
    <!-- Mensagem de erro -->
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast } from 'buefy';

export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      },
      error: ''
    };
  },
  methods: {
    submitForm() {
      fetch('http://localhost:4200/api/users/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userData),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Erro ao cadastrar usuário');
          }
        })
        .then(data => {
          console.log('Resposta do servidor:', data);
          // Limpe os campos do formulário após o envio bem-sucedido
          this.userData.name = '';
          this.userData.email = '';
          this.userData.password = '';
          Toast.open({
            message: 'Cadastrado com sucesso!',
            type: 'is-success'
          });
        })
        .catch(error => {
          Toast.open({
            message: 'Erro ao cadastrar usuário',
            type: 'is-danger'
          });
          console.error('Erro ao cadastrar usuário:', error.message);
          // Trate o erro e exiba uma mensagem de erro para o usuário
          this.error = error.message || 'Erro ao cadastrar usuário.';
        });
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente */
.cadastro-container {
  background-color: #00C699;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.cadastro-form {
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
