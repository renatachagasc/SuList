<template>
  <!-- O ID "home" identifica este componente na página -->
  <div id="home" class="home-container">
    <!-- Coluna esquerda -->
    <div class="left-column">
      <!-- Imagem do logo do SuList -->
      <img src="@/assets/sulist-logo.png" alt="Logo do SuList" class="logo-img">
      <!-- Botão para acessar a conta -->
      <div class="btn-acessar">
        <router-link to="/login" class="login-link">Acessar conta</router-link>
      </div>
    </div>
    <!-- Coluna direita -->
    <div class="right-column">
      <!-- Imagens dos ícones do SuList -->
      <img src="@/assets/sulist-icons.png" alt="Icons do SuList" class="icons-img">
    </div>
  </div>
</template>
  
<script>
export default {
  // Nome do componente
  name: 'home',
};
</script>
  
<style>
/* Estilos específicos do componente */

.home-container {
  background-color: #00C699;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0;
  overflow: hidden;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.btn-acessar {
  margin-left: 35px;
}

.login-link {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #F14975;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.login-link:hover {
  background-color: #f7cd34;
}

.logo-img,
.icons-img {
  max-width: 100%;
}
</style>
