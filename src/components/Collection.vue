<template>
  <div class="collection">
    <br />
    <br />
    <br />
    <br />
    <h1>Collection</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="/product/ + product.id" >{{ product.title }}</router-link>
      </li>
    </ul>
    <br />
    <br />
    <br />
    <br />
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
