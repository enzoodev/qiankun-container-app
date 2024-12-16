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
    name: 'Microfrontend',
    component: {
      template: '<div>Microfrontend carregando...</div>',
    },
  },
],
});
