<template>
  <!-- O ID "login" identifica este componente na página -->
  <div id="login">
      <!-- Inclui o componente LoginForm dentro deste componente -->
      <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  // O nome do componente, usado para referenciar este componente em outros lugares
  name: 'Login',
  // Componentes que este componente utiliza
  components: {
      LoginForm
  }
};
</script>
