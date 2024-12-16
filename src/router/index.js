import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'), // Componente principal do container
  },
  {
    path: '/vue3', // Rota onde o microfrontend será exibido
    name: 'Microfrontend',
    component: {
      template: '<div>Microfrontend carregando...</div>',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
