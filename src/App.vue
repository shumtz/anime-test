<template>
  <div id="nav">
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'Main',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 95px;
}
</style>
