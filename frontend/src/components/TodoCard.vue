<template>
  <!-- Template do componente -->
  <div class="card">
    <!-- Cabeçalho do cartão -->
    <header class="card-header">
      <!-- Título do cabeçalho -->
      <p class="card-header-title has-text-left">
       {{ hoje }} <!-- Exibição da data de hoje -->
      </p>
      <!-- Contagem de tarefas -->
      <div class="has-text-right">
        <p class="card-header-title">{{ tarefas.length }} tarefas</p>
      </div>
    </header>
    <!-- Conteúdo do cartão -->
    <div class="card-content">
      <!-- Nova tarefa -->
      <div class="content">
        <novo-todo @novaTarefa="adicionarTarefa"></novo-todo> <!-- Componente para adicionar nova tarefa -->
      </div>
      <!-- Lista de tarefas -->
      <div class="content">
        <todo-list :tarefas="tarefas" @check="checkTarefa" @remover="removerTarefa"></todo-list> <!-- Componente para exibir a lista de tarefas -->
      </div>
    </div>
  </div>
</template>

<script>
import NovoTodo from './NovoTodo' // Importa o componente NovoTodo
import TodoList from './TodoList' // Importa o componente TodoList
export default {
  // Definição do componente Vue
  name: 'todo-card', // Nome do componente
  components: { // Componentes filhos utilizados
    NovoTodo,
    TodoList
  },
  data () {
    // Definição dos dados do componente
    return {
      dias: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], // Array com os dias da semana
      meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // Array com os meses do ano
      tarefas: [] // Array para armazenar as tarefas
    }
  },
  computed: {
    // Método computado para exibir a data de hoje
    hoje: function() {
      let novaData = new Date()
      return `${this.dias[novaData.getDay()]}, ${novaData.getDate()} de ${this.meses[novaData.getMonth()]}`
    }
  },
  methods: {
    // Método para adicionar uma nova tarefa
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    },
    // Método para marcar/desmarcar uma tarefa como concluída
    checkTarefa(index) {
      this.tarefas[index].checked = !this.tarefas[index].checked;
    },
    // Método para remover uma tarefa
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    }
  }
}
</script>

<style>
.card {
  border-radius: 10px; /* Estilo para arredondar as bordas do cartão */
}
.card-header-title {
  color: #636368; /* Cor do título do cabeçalho do cartão */
}
</style>
