<template>
    <div class="wrapper-header">
        <Menu mode="horizontal" :theme="theme" active-name="1">
            <div class="wrapper-header-nav">
                <a href="/" class="wrapper-header-nav-logo">
                    <img src="../images/bitUtopian.png">
                </a>
                <MenuItem name="1">
                    <span @click="goUrl('/exchange')">{{menuText[0][language]}}</span>
                </MenuItem>
                <MenuItem name="2">
                    <span @click="goUrl('/indicators#MA')">{{menuText[1][language]}}</span>
                </MenuItem>
                <MenuItem name="3">
                    <a href="https://in.tradingview.com/markets/cryptocurrencies/ideas/" target="_blank">{{menuText[2][language]}}</a>
                </MenuItem>

                <div class="wrapper-header-nav-list">
                    <Submenu name="4">
                        <template slot="title">
                            {{language === 'zh' ? '简体中文' : 'English'}}
                        </template>
                        <MenuItem name="4-1"><span class="afont" @click="changeLang('en')">English</span></MenuItem>
                        <MenuItem name="4-2"><span class="afont" @click="changeLang('zh')">简体中文</span></MenuItem>
                    </Submenu>
                </div>
                <MenuItem name="5" v-if="!user" class="wrapper-header-nav-login">
                    <span class="login" @click="signIn">{{menuText[3][language]}}</span>
                    <span> | </span>
                    <span class="register" @click="signIn">{{menuText[4][language]}}</span>
                </MenuItem>
                <div v-else class="wrapper-header-nav-list wrapper-header-nav-user">
                    <Submenu name="5">
                        <template slot="title" class="user-name">
                            <img src="../images/blockstack-logo.png" class="blockstack-logo">
                            {{user.username}}
                        </template>
                        <MenuItem name="5-1"><span class="afont" @click="signOut">{{menuText[5][language]}}</span></MenuItem>
                    </Submenu>
                </div>
            </div>
        </Menu>
    </div>
</template>

<script>
import { Menu, MenuItem, Submenu } from 'iview'
import { menuText } from '../constants/textContents'
import { Person } from 'blockstack'
import { userSession } from '../userSession'

export default {
  name: 'Home',
  components: {
    Menu,
    MenuItem,
    Submenu
  },
  props: ['changeState', 'language', 'isLogin'],
  data () {
    return {
      theme: 'dark',
      menuText,
      userSession: null,
      user: null
    }
  },
  created () {
    this.userSession = userSession
  },
  mounted () {
    if (userSession.isUserSignedIn()) {
      this.userData = userSession.loadUserData()
      this.user = new Person(this.userData.profile)
      this.user.username = this.userData.username.replace(/^(.+)\.(.+\..+)/, '$1')
      this.changeState('isLogin', true)
      const returnUrl = localStorage.getItem('returnUrl')
      returnUrl && (location.href = returnUrl)
      localStorage.removeItem('returnUrl')
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn()
        .then((userData) => {
          console.log('userData', userData)
          window.location = window.location.origin
        })
    } else {
      this.changeState('isLogin', false)
    }
  },
  methods: {
    changeLang (lang) {
      const path = this.$router.history.current.path
      this.$router.push({ path, query: { lang } })
    },
    signIn () {
      const returnUrl = location.href
      localStorage.setItem('returnUrl', returnUrl)
      userSession.redirectToSignIn()
    },
    signOut () {
      userSession.signUserOut()
      this.user = null
      this.changeState('isLogin', false)
      if (location.pathname !== '/') {
        location.href = location.origin + '/'
      }
    },
    goUrl (url) {
      const returnUrl = location.origin + url
      if (this.isLogin) {
        location.href = returnUrl
      } else {
        userSession.redirectToSignIn()
        localStorage.setItem('returnUrl', returnUrl)
      }
    }
  }
}
</script>
<style src="../assets/header.css" lang="css">
</style>
