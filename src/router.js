import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exchange from './views/Exchange.vue'
import Indicators from './views/Indicators.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    }
    ,
    {
      path: '/indicators',
      name: 'indicators',
      component: Indicators
    }
  ]
})
