<template>
  <!-- Template do componente -->
  <div class="row">
    <div class="columns">
      <div class="column">
        <!-- Loop através das tarefas -->
        <div class="field is-grouped" v-for="(tarefa, index) in tarefas" :key="index">
          <!-- Botão de verificação -->
          <p class="control">
            <a class="button is-rounded is-small check-button" @click="check(index)">
              <span class="icon is-small">
              </span>
            </a>
          </p>
          <!-- Exibição da tarefa -->
          <p class="control is-expanded" :class="{ 'checked': tarefa.checked }">{{ tarefa.titulo }}:
            <ul>
              <!-- Loop para exibir a descrição da tarefa -->
              <li v-for="(descricao, dIndex) in tarefa.descricao" :key="dIndex">{{ descricao }}</li>
            </ul>
          </p>
          <!-- Botão de remoção da tarefa -->
          <p class="control">
            <a class="button is-danger is-small" @click="remover(index)">
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Definição do componente Vue
  name: 'todo-list', // Nome do componente
  props: ['tarefas'], // Propriedade para receber a lista de tarefas do componente pai
  methods: {
    // Método para marcar uma tarefa como concluída
    check(index) {
      this.$emit('check', index); // Emissão do evento 'check' com o índice da tarefa
    },
    // Método para remover uma tarefa
    remover(index) {
      this.$emit('remover', index); // Emissão do evento 'remover' com o índice da tarefa
    }
  }
}
</script>

<style scoped>
/* Estilos CSS aplicados localmente ao componente */
p{
text-align: left;
}
.button {
  border-radius: 50%; /* Estilo para arredondar os botões */
}

.checked {
  text-decoration: line-through; /* Estilo para adicionar uma linha através do texto das tarefas concluídas */
}
</style>
