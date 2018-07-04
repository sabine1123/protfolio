import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import plugins from '@/pages/plugins.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'plugins',
      component: plugins
    }
  ]
})
