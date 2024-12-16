import { registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);

app.use(router);
app.mount('#app');

// Registrar os microfrontends
registerMicroApps([
  {
    name: 'patrimonio', // Nome do microfrontend
    entry: '//localhost:7105', // URL onde o microfrontend está rodando
    container: '#micro-container', // Container onde será montado
    activeRule: '/patrimonio', // Rota para ativar o microfrontend
  },
]);

// Iniciar o Qiankun
start();
