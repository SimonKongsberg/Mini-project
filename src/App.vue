<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <contact-us></contact-us>
  </div>
</template>

<script>
  import ContactUs from '@/components/ContactUs'
export default {
    name: 'App',
    components: {
        'contact-us':ContactUs
    }
}
</script>

<style lang="scss">
  @import './assets/styles/base';
</style>
