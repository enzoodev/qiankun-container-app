<template>
  <div>
    <h1>HOME CONTAINER-APP</h1>
    <!-- Adicionando o link para a rota do microfrontend -->
    <router-link to="/vue3">Ir para o Microfrontend Vue 3</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilo opcional para melhorar a aparência do link */
router-link {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}
router-link:hover {
  text-decoration: underline;
}
</style>
