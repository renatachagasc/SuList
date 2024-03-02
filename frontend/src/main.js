// main.js

import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from './App.vue';
import router from './router'; // Certifique-se de importar o router aqui

Vue.use(Buefy);

new Vue({
  router, // Adicione o router à instância Vue
  render: h => h(App),
}).$mount('#app');
