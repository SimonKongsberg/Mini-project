<template>
  <div class="product-container">

    <!--Banner 2-->
    <img src="../assets/50_collect.jpg" class="banner2 banner--50" alt="banner" />

    <!--Product main-->
    <div class="product-main">
      <div class="product-main__left">
        <div class="product-main__showcase">
          <img src="/static/products/10.png"/>
          <img src="/static/products/11.png" />
          <img src="/static/products/12.png" />
          <img src="/static/products/13.png" />
          <img src="/static/products/14.png" />

        </div>
        <img class="product-main__img" :src="'/static/products/' + product.img" :alt="product.title"/>
      </div>
      <div class="product-main__right">
        <div class="product-info">
          <h1>{{ product.title}}</h1>
          <div class="price-con">
            <h3>${{ product.price}}</h3>
            <p><span class="fa fa-globe"></span> Free shipping worldwide</p>
          </div>
          <select class="product-main__input" v-model="selected">
            <option disabled value="">Pick a variant</option>
            <option>Black</option>
            <option>Yellow</option>
            <option>White</option>
          </select><br />
          <select class="product-main__input" v-model="selected" required>
            <option disabled selected value="">Pick a size</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
          <button class="product-main__button product-main__button--size"><span class="fa fa-exclamation-circle"></span> Size Guide</button>
          <br />
          <button class="product-main__button"><span class="fa fa-shopping-bag"></span> ADD TO BAG</button><br />
          <button class="product-main__button product-main__button--save">SAVE FOR LATER</button><a href="/" class="share"><span class="fa fa-share-alt"></span> Share this product</a>
        </div>
        <tabs class="product-nav">
          <tab name="Description" class="product-nav__button">
            <p class="product-nav__text">Lorem1 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </tab>
          <tab name="Brand" class="product-nav__button">
            <p class="product-nav__text">Lorem2 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </tab>
          <tab name="Info" class="product-nav__button">
            <p class="product-nav__text">Lorem3 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </tab>
        </tabs>
      </div>
    </div>

    <div class="promo">
      <h1 class="promo__title">Sharpen Your Look</h1>
      <div class="line--blue"></div>
      <p class="promo__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>

    <!--Product info-->
    <div class="info">
      <img src ="../assets/big_image_left.png" alt="big image left" class="info__img" />
      <div class="info-box info-box--black">
        <h2 class="info-box__title">Extraordinary Design</h2>
        <p class="info-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <div class="circles-container">
          <div class="circle">
            <div class="circle__item">
              <img src="../assets/glasses.png" alt="glasses"/>
            </div>
            <p class="circle__text">Elegant style</p>
          </div>

          <div class="circle">
            <div class="circle__item">
              <img src="../assets/coathanger.png" alt="coat hanger" />
            </div>
            <p class="circle__text">Elegant style</p>
          </div>

          <div class="circle">
            <div class="circle__item bowtie" >
              <img src="../assets/bowtie.png" alt="bowtie" />
              
            </div>
            <p class="circle__text">Elegant style</p>
          </div>
        </div>
        <button class="info__button">READ MORE</button>
      </div>
      
      <div class="info-box info-box--blue">
        <h2 class="info-box__title">Extraordinary Design</h2>
        <p class="info-box__text info-box__text--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <div class="circles-container">
          <div class="circle">
            <div class="circle__item cWhite">
              <img src="../assets/glasses.png" alt="glasses" />
            </div>
            <p class="circle__text">Elegant style</p>
          </div>
          <div class="circle">
            <div class="circle__item cWhite">
              <img src="../assets/coathanger.png" alt="coat hanger" />
            </div>
            <p class="circle__text">Elegant style</p>
          </div>
          <div class="circle">
            <div class="circle__item cWhite bowtie">
              <img src="../assets/bowtie.png" alt="bowtie" />
            </div>
            <p class="circle__text">Elegant style</p>
          </div>
        </div>
        <button class="info__button">READ MORE</button>
    </div>

      <img src="../assets/big_image_right.png" alt="big image right" class="info__img" />

    </div>

    <!--Banner 2-->
    <img src="../assets/big_discounts.jpg" class="banner2 banner-big" alt="banner2" />

    <!--Social-->
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
    name: 'product-detail',
    data: function () {
      return {
        product: ''
      };
    },
    created: function () {
      let id = this.$route.params.id;
      this.getProductById(id);
    },
    methods: {
      getProductById: function (id) {
        axios
          .get("/static/products.json")
          .then(response => { this.product = response.data.filter(product => product.id == id)[0] })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>
