<template>
  <div id="app">
    <v-header></v-header>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>

<style lang="sass">
@import "./src/sass/common.sass"
#app
  font-family: 'Muli', sans-serif
  color: #50514f
  ul
    margin: 0
    padding: 0
    li
      list-style: none
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
