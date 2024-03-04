<template>
  <div id="sulist">
    <!-- Cabeçalho do herói -->
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-head">
        <!-- Barra de navegação -->
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <!-- Link para a página inicial -->
              <router-link to="/" class="navbar-item logo">SuList</router-link>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <!-- Botão para compartilhar tarefas por e-mail -->
                <a class="compartilhar_email" @click="enviarPorEmail" :disabled="loading">
                  <span class="icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Path do ícone -->
                    </svg>
                  </span>
                  <span>Compartilhar tarefas por email</span>
                  <!-- Ícone de carregamento -->
                  <span v-if="loading" class="icon">
                    <i class="fa fa-spinner fa-spin"></i>
                  </span>
                </a>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <!-- Componente do card de tarefas -->
                <todo-card ref="todoCard"></todo-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <!-- Rodapé do herói -->
            <p>
              <strong>© SuList | Todos os Direitos Reservados</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TodoCard from '../components/TodoCard'
import { ToastProgrammatic as Toast } from 'buefy';

export default {
  name: 'sulist',
  components: {
    TodoCard
  },
  data() {
    return {
      msg: 'Sulist!',
      loading: false, // Estado do ícone de carregamento
    };
  },
  methods: {
    // Método para enviar tarefas por e-mail
    enviarPorEmail() {
      // Ativa o ícone de carregamento
      this.loading = true;
      // Obtém a lista de tarefas do componente TodoCard
      const listaDeTarefas = this.$refs.todoCard.tarefas;
      // Envia a lista de tarefas para o servidor
      fetch('http://localhost:4200/api/email/send-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ listaDeTarefas }), // Envia a lista de tarefas no corpo da requisição
      })
        .then(response => {
          if (response.ok) {
            Toast.open({
              message: 'Email enviado com sucesso!',
              type: 'is-success'
            });
          } else {
            Toast.open({
              message: 'Erro ao enviar o email',
              type: 'is-danger'
            });
          }
        })
        .catch(error => {
          Toast.open({
            message: 'Erro ao enviar o email',
            type: 'is-danger'
          });
          console.error('Erro ao enviar o email:', error);
        })
        .finally(() => {
          // Desativa o ícone de carregamento
          this.loading = false;
        });
    }
  }
}
</script>

<style>
.selector-for-some-widget {
  box-sizing: content-box;
}

/* Estilo para o link do logo */
.logo {
  font-weight: bold;
  text-decoration-line: line-through;
  font-size: 29px;
}

.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
}

.is-primary.input,
.is-primary.textarea {
  border-color: #00d1b2;
}

/* Estilo para o botão de compartilhar por e-mail */
.compartilhar_email {
  background: #23D160;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
}

/* Estilo para o ícone dentro do botão de compartilhar por e-mail */
.compartilhar_email svg {
  margin-right: 10px;
}
</style>
