<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
        <router-view/>
        <div id="about" @click="toggle">About Me</div>
        <transition name="fade">
          <div class="lightbox" v-show="isShow">
            <div class="wrap">
              <div class="btn_close" @click="toggle"></div>
              <h4 class="title"> {{lb_title}} </h4>
              <div class="content">
                  <div>Sabine</div>
                  <div>
                    <ul>
                      <li>
                        <span>F2E</span>
                      </li>
                      <li>
                        <span>Css. Sass. Bootstrap. Jquery. Pug. RWD. Ajax. Git</span>
                      </li>
                      <li>
                        <span>Steadiness. Compliance</span>
                      </li>
                    </ul>                               
                  </div>
                

              </div>

            </div>
          </div>
        </transition>

    </div>
    

  </div>
</template>

<script>
import header from "./components/header.vue";

export default {
  name: "App",
  components: {
    "v-header": header
  },
  data() {
    return {
      // msg: 'Hello world!',
      isShow: true,
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
    bottom: 30px
    right: 20px
    font-size: 18px
    cursor: pointer
    writing-mode: vertical-lr 
  
  .lightbox
    @include box-center
    width: 100vw
    height: 100vh
    background-color: rgba(#fff,.8)
    position: fixed

    .wrap
      @include box-center
      width: 60%
      max-width: 650px
      height: 65%
      background-color: #fff
      border: 2px solid #000
      position: absolute
      padding: 10px 30px 20px
      letter-spacing: 1.1px
      .title
        font-weight: bold
        color: $mG
      .content
        margin-top: 20px
        display: flex
        >div
          &:first-child
            width: 25%
            font-weight: 500
            font-size: 16px
            text-align: center
          ul
            li
              margin-bottom: 10px
              span
                padding-bottom: 2px
                border-bottom: 1px solid $mainG
          


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
