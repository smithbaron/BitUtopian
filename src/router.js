import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exchange from './views/Exchange.vue'
import Indicators from './views/Indicators.vue'
import Wallet from './views/Wallet.vue'
import AddAccount from './views/AddAcount.vue'
import Login from './views/Login.vue'

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
    },
    {
      path: '/indicators',
      name: 'indicators',
      component: Indicators
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    },
    {
      path: '/addAccount',
      name: 'addAccount',
      component: AddAccount
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Login
    }
  ]
})
