<template>
  <div>
    <h1></h1>
    <p>Email us at {{email}}</p>
  </div>
</template>

<script>
  export default {
    name: 'contact-us',
    data: function () {
      return {
        email: 'hello@eal.dk'
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/styles/base';
</style>
