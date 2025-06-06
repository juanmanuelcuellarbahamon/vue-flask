<template>
  <div id="app">
    <nav>
      <router-link to="/ejercicio1">Ejercicio 1</router-link> |
      <router-link to="/ejercicio2">Ejercicio 2</router-link> |
      <router-link to="/ejercicio3">Ejercicio 3</router-link> |
      <router-link to="/ejercicio4">Ejercicio 4</router-link> |
      <router-link to="/ejercicio5">Ejercicio 5</router-link>
    </nav>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      console.log(import.meta.env.VITE_API_BASE_URL)
    })
  }
});
</script>

<style>
nav {
  padding: 1rem;
  background-color: #f0f0f0;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  font-weight: bold;
  color: #007bff;
}

.content {
  margin: 20px;
}
</style>