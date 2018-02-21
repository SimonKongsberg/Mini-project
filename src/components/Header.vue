<template>
  <header :class="{'headroom--unpinned': scrolled}"  v-on="handleScroll" class="nav">
    <a href="#/"><div class="nav__logo"><img src="../assets/logo.png" /></div></a>
    <div class="icon">
      <a href="#/"><div class="icon__login"><span class="fa fa-user"></span> Login</div></a>
      <a href="#/"><div class="icon__cart"><span class="fa fa-shopping-cart"></span> 3 items</div></a>
      <a href="#/"><div class="icon__search"><span class="fa fa-search"></span></div></a>
      <a v-on:click="navOpen=true" ><div class="icon__bars"><span class="fa fa-bars"></span></div></a>
    </div>
    <div class="menu" v-if="navOpen">
      <a><span v-on:click="navOpen=false" class="fa fa-chevron-right"></span></a>
      <hr />
      <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/collection">Collection</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'header-scroll', data() {
      return {
        limitPosition: 35,
        scrolled: false,
        lastPosition: 0,
        navOpen: false,
      };
    },

    methods: {
      handleScroll() {
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.scrolled = true;
          // move up!
        }

        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
          // move down
        }

        this.lastPosition = window.scrollY <250;
        // this.scrolled = window.scrollY > 250;
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

</script>
