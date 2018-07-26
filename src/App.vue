<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
        <router-view/>
        <div id="about" @click="toggle">About Me</div>
        <div class="lightbox" v-show="isShow">test</div>

    </div>
    

  </div>
</template>

<script>
import header from './components/header.vue'

export default {
  name: 'App',
  components: {
    'v-header': header,
  },
  data () {
    return {
      msg: 'Hello world!',
      isShow: true,
    }
  },

  methods: {
    toggle: function() {
      this.isShow = !this.isShow;
    }
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
  .container
    max-width: 1200px
    margin: 50px auto 100px
    padding: 0 percentage(60px/1200px)
  #about
    position: fixed
    top: 50%
    right: 20px
    font-size: 18px
    cursor: pointer
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
