import Vue from 'vue'; // Importa o Vue.js
import VueRouter from 'vue-router'; // Importa o Vue Router
import Home from '@/views/Home.vue'; // Importa o componente Home.vue da pasta views
import Login from '@/views/Login.vue'; // Importa o componente Login.vue da pasta views
import Sulist from '@/views/Sulist.vue'; // Importa o componente Sulist.vue da pasta views
import App from '@/App.vue'; // Importa o componente App.vue
import Cadastro from '@/views/Cadastro.vue'; 

Vue.use(VueRouter); // Instala o Vue Router

// Define as rotas da aplicação
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/app',
    name: 'App',
    component: App,
  },
  {
    path: '/sulist',
    name: 'Sulist',
    component: Sulist,
  }
];

const router = new VueRouter({
  routes // Passa as rotas definidas para o VueRouter
});

export default router; // Exporta o router para ser utilizado em outros lugares da aplicação
