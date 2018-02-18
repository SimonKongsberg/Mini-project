<template>
  <div class="collection">
    <img src="../assets/new_collection.gif" class="banner2" alt="banner2" />
    <ul class="showcase">
      <li class="showcase-item" v-for="product in products" :key="product.id">
        <router-link :to="/product/ + product.id">
          <p class="sale-float">{{ product.sale}}</p>
          <img class="showcase-item__img" :src="'/static/products/' + product.img" :alt="product.title" />
          <h4 class="showcase-item__title">{{ product.title }}</h4>
          <div class="showcase-item__bottom">
            <p class="showcase-item__price">$ {{product.price}}</p>
            <button class="showcase-item__button"><span class="fa fa-shopping-bag"></span> Add to bag</button>
          </div>
        </router-link>
      </li>
    </ul>

    <div class="sub">
      <input class="sub__input" placeholder="YOUR EMAIL">
      <button class="sub__button">SUBSCRIBE TO OUR NEWSLETTER
      </button>

    </div>

    <div class="social">
      <div class="social__title">----- GET US ON -----</div>
      <div class="social__nav">
        <div class="circle-social"><span class="fa fa-twitter social__nav-icon"></span></div>
        <div class="circle-social"><span class="fa fa-pinterest social__nav-icon"></span></div>
        <div class="circle-social"><span class="fa fa-facebook social__nav-icon"></span></div>
        <div class="circle-social"><span class="fa fa-google-plus social__nav-icon"></span></div>
        <div class="circle-social"><span class="fa fa-youtube social__nav-icon"></span></div>
        <div class="circle-social"><span class="fa fa-tumblr social__nav-icon"></span></div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';


  export default {
    name: 'product-list',
    data: function () {
      return {
        products: []
      }
    },
    created: function () {
      this.getProducts();
    },
    methods: {
      getProducts: function () {
        axios
          .get("/static/products.json")
          .then(response => { this.products = response.data })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
</script>
