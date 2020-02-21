<template>
  <div id="app">
    <demo />
  </div>
</template>

<script>
import Demo from "./demo.vue";
export default {
  name: "App",
  components: {
    Demo
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-color: #000;
  margin-bottom: 50px;
}
</style>
