<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
    <footer-bot></footer-bot>
  </div>
</template>

<script>
  
  import HeaderTop from '@/components/Header'
  import FooterBot from '@/components/Footer'


export default {
    name: 'App',
    components: {
      'header-top': HeaderTop,
      'footer-bot': FooterBot

    }
}
</script>

<style lang="scss">
  @import './assets/styles/base';
</style>
