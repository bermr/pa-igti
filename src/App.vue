<template>
  <div>
    <div class="text-center" id="loader" v-if="$wait.any">
      <div class="spinner-border" style role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p class="text-center">Aguarde...</p>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500&display=swap");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
