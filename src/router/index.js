import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import plugins from '@/pages/plugins.vue'
import webs from '@/pages/webs.vue'
import others from '@/pages/others.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      components: {
        default: plugins,
      }
    },
    {
      path: '/plugins',
      name: 'plugins',
      component: plugins,
    },
    { 
      path: '/webs',
      name: 'webs', 
      component: webs,      
    },
    { 
      path: '/others',
      name: 'others', 
      component: others,
    },
  ]
})
