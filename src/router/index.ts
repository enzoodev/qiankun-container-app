import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/patrimonio', // Rota onde o microfrontend será exibido
    name: 'PATRIMONIO',
    component: {
      template: '<div>Microfrontend carregando...</div>',
    },
  },
  {
    path: '/depe', // Rota onde o microfrontend será exibido
    name: 'DEPE_FRONTEND_VUE3',
    component: {
      template: '<div>Microfrontend carregando...</div>',
    },
  },
  {
    path: '/velhodepe', // Rota onde o microfrontend será exibido
    name: 'DEPE_FRONTEND_VUE2',
    component: {
      template: '<div>Microfrontend carregando...</div>',
    },
  },
],
});
