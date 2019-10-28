<template>
  <Layout class="login-view">
    <Header class="login-header">
      <CommonHeader :language="language" :changeState="changeState" :isLogin="isLogin"></CommonHeader>
    </Header>
    <Content class="login-content">
      <div class="content-header">
        <span>{{$route.name === 'login' ? language === 'en' ? 'Log In' : '登录' : language === 'en' ? 'Create a free account' : '创建一个免费帐户'}}</span>
      </div>
      <div class="content-form">
        
      </div>
    </Content>
  </Layout>
</template>
<script>
import { Layout, Header, Content } from 'iview'
import CommonHeader from '@/components/CommonHeader'
export default {
  name: 'Login',
  components: {
    Layout,
    Header,
    Content,
    CommonHeader
  },
  data () {
    return {
      language: 'en',
      isLogin: false
    }
  },
  methods: {
    changeState (state, value) {
      this[state] = value
    }
  }
}
</script>
<style lang="scss">
.login-view {
  height: auto;
  width: 100%;
}
.login-header {
  height: 50px;
}
</style>
