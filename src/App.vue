<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
        <router-view/>
        <div id="about" @click="toggle"><i class="fas fa-certificate"></i>About Me</div>
        <transition name="fade">
          <div class="lightbox" v-show="isShow">
            <div class="wrap">
              <div class="btn_close" @click="toggle"></div>
              <h4 class="title"> {{lb_title}} </h4>
              <div class="content">
                <v-about></v-about>
              </div>

            </div>
          </div>
        </transition>

    </div>
    

  </div>
</template>

<script>
import header from "./components/header.vue";
import about from "./lightbox/about.vue";

export default {
  name: "App",
  components: {
    "v-header": header,
    "v-about": about,
  },
  data() {
    return {
      isShow: false,
      lb_title: "About me"
    };
  },

  methods: {
    toggle: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="sass">
@import "./src/sass/common.sass"

#app
  font-family: 'Muli', sans-serif
  color: #50514f
  .container
    max-width: 1200px
    margin: 50px auto 100px
    padding: 0 percentage(60px/1200px)
  #about
    position: fixed
    bottom: 150px
    right: 20px
    font-size: 18px
    cursor: pointer
    writing-mode: vertical-lr
    i 
      font-size: 14px
      color: lighten($sp,5%)
      margin-bottom: 5px 
  
  .lightbox
    @include box-center
    width: 100vw
    height: 100vh
    background-color: rgba(#fff,.8)
    position: fixed

    .wrap
      @include box-center
      width: 95%
      max-width: 650px
      background-color: #fff
      border: 2px solid #000
      position: absolute
      padding: 10px 30px 20px
      letter-spacing: 1.1px
      @include pc()
        height: 65%
      .title
        font-weight: bold
        color: $mG

.fade-enter-active, 
.fade-leave-active 
  transition: opacity .5s

.fade-enter, 
.fade-leave-to 
  opacity: 0

.btn_close
  position: absolute
  width: 20px
  height: 20px
  right: 5px
  top: 5px
  cursor: pointer
  &:before, &:after
    content: ''
    display: block
    position: absolute
    width: 100%
    height: 1px
    background-color: #000
    top: 50%
    left: 0    
  &:before
    transform: rotate(45deg)

  &:after
    transform: rotate(-45deg)

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
