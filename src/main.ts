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
    name: 'patrimonio',
    entry: 'https://dev.gerais.mg.def.br/sistemas/patrimonio',
    // entry: '//localhost:3030/sistemas/patrimonio',
    // entry: '//localhost:3030',
    container: '#micro-container',
    activeRule: '/sistemas/patrimonio',
  },
  {
    name: 'depe',
    entry: '//localhost:3031',
    container: '#micro-container',
    activeRule: '/depe',
  },
  {
    name: 'velhodepe', // Nome do microfrontend
    entry: '//localhost:7101', // URL onde o microfrontend está rodando
    container: '#micro-container', // Container onde será montado
    activeRule: '/velhodepe', // Rota para ativar o microfrontend
  },
]);

// Iniciar o Qiankun
start();
