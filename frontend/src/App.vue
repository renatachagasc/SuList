<template>
  <!-- O elemento com ID "app" é o ponto de montagem da aplicação Vue -->
  <div id="app">
    <!-- O componente <router-view> é responsável por renderizar o componente correspondente à rota atual -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
// Define o nome do componente como 'app'
name: 'app',
};
</script>

<style>
/* Estilos aplicados ao elemento com ID "app" */
#app {
font-family: Arial, sans-serif; /* Define a fonte para a aplicação */
margin: 0; /* Remove margens padrão */
padding: 0; /* Remove preenchimento padrão */
}
</style>
