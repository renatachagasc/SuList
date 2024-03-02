<!-- Template para adicionar uma nova tarefa com descrições múltiplas -->
<template>
  <!-- Estrutura do formulário para adicionar uma nova tarefa -->
  <div class="row">
    <div class="columns">
      <div class="column">
        <!-- Agrupamento de elementos do formulário -->
        <div class="field is-grouped">
          <!-- Campo de entrada para o título da tarefa -->
          <p class="control is-expanded">
            <input class="input is-primary" type="text" placeholder="Título da tarefa..." v-model="titulo">
          </p>
          <!-- Campo de entrada para as descrições da tarefa -->
          <p class="control is-expanded">
            <input class="input is-primary" type="text" placeholder="Descrições (separadas por vírgula)..." v-model="descricao">
          </p>
          <!-- Botão para adicionar a tarefa -->
          <p class="control">
            <a class="button is-success add-button" @click="enviarTarefa">
              <span class="icon is-small">
                <i class="fa fa-plus"></i>
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
  // Nome do componente
  name: 'NovoTodo',
  // Dados do componente
  data() {
    return {
      titulo: '', // Título da nova tarefa
      descricao: '', // Descrição da nova tarefa
    };
  },
  // Métodos do componente
  methods: {
    // Método para enviar a nova tarefa
    enviarTarefa() {
      // Verifica se o título e a descrição estão preenchidos
      if (this.titulo !== '' && this.descricao !== '') {
        // Converte a descrição em um array de descrições
        const descricoes = this.descricao.split(',').map(desc => desc.trim());
        // Emite o evento 'novaTarefa' com os dados da nova tarefa
        this.$emit('novaTarefa', { titulo: this.titulo, descricao: descricoes, checked: false });
        // Limpa os campos de entrada
        this.titulo = '';
        this.descricao = '';
      }
    }
  }
}
</script>

<!-- Estilos específicos do componente -->
<style scoped>
.input {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
  outline: none;
  border-bottom-width: 2px;
  box-shadow: none;
}
.input.is-primary:focus {
  box-shadow: none;
}
.add-button {
  border-radius: 50%;
}
</style>
