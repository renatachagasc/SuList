<template>
  <!-- O ID "login" identifica este componente na página -->
  <div id="cadastro">
      <!-- Inclui o componente LoginForm dentro deste componente -->
      <cadastro-form></cadastro-form>
  </div>
</template>

<script>
import CadastroForm from '@/components/CadastroForm.vue';

export default {
  // O nome do componente, usado para referenciar este componente em outros lugares
  name: 'Cadastro',
  // Componentes que este componente utiliza
  components: {
      CadastroForm
  }
};
</script>
