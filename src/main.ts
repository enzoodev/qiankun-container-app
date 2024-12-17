import { registerMicroApps, start } from 'qiankun';
import { Quasar } from 'quasar';
import { createApp } from 'vue';
import App from './App.vue';
import { quasarOptions } from './lib/plugins/quasar';
import { router } from './router';

const app = createApp(App);

app
  .use(router)
  .use(Quasar, quasarOptions);

app.mount('#app');

// Registrar os microfrontends
registerMicroApps([
  {
    name: 'patrimonio', // Nome do microfrontend
    entry: '//localhost:3030', // URL onde o microfrontend está rodando
    container: '#micro-container', // Container onde será montado
    activeRule: '/patrimonio', // Rota para ativar o microfrontend
  },
]);

// Iniciar o Qiankun
start();
