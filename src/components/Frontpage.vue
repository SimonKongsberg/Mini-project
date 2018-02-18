<template>
  <div id="main-content">
    <!--Slider-->
    <md-card class="md__card">
      <md-card-actions>
        <md-button class="md-icon-button"
                   target="_blank"
                   href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/05-pagination-progress.vue">
        </md-button>
      </md-card-actions>
      <md-card-media>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide><div class="banner" :style="{'background-image': 'url(' + require('../assets/big_summer.gif') + ')'}"></div></swiper-slide>
          <swiper-slide><div class="banner" :style="{'background-image': 'url(' + require('../assets/new_collection.gif') + ')'}"></div></swiper-slide>
          <swiper-slide><div class="banner" :style="{'background-image': 'url(' + require('../assets/Lookbooks.gif') + ')'}"></div></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </md-card-media>
    </md-card>

    <div class="news">
        <div class="news-item news-item--men" :style="{'background-image': 'url(' + require('../assets/men_lookbook.png') + ')'}">
          <a href="/"><div class="news-item__text">MEN'S <br /><p>lookbook</p></div></a>
        </div>
      <div class="news-letter">
        <div class="news-letter__icon"><span class="fa fa-envelope"></span></div>
        <h1 class="news-letter__title">GET OUR NEWSLETTER</h1>
        <p class="news-letter__text">JOIN OUR MAILLIST TO RECIVE <br />SPECIAL DISCOUNTS</p>
        <form class="news-form">
          <input class="news-form__email" placeholder="ENTER YOUR EMAIL" /><br />
          <button class="news-form__button">SUBSCRIBE</button>
        </form>

      </div>
      <div class="news-item news-item--women" :style="{'background-image': 'url(' + require('../assets/women_lookbook.png') + ')'}">
        <a href="/"><div class="news-item__text">WOMEN'S <br /><p>lookbook</p></div></a>
</div>
    </div>

    <!--Brand-->

    <div class="brand">
        <h3 class="brand__title">----- TOP BRANDS -----</h3><br />
      <div class="brand__icons">
        <img src="../assets/logo1.png" alt="logo" class="brand-icon"/>
        <img src="../assets/logo2.png" alt="logo2" class="brand-icon" />
        <img src="../assets/logo3.png" alt="logo3" class="brand-icon" />
        <img src="../assets/logo4.png" alt="logo4" class="brand-icon" />
        <img src="../assets/logo5.png" alt="logo5" class="brand-icon" />


      </div>
    </div>
    <!--Content-->

    <div class="content">
      <div class="content__box content__box--left">
        <a href="/"><img src="../assets/for_her.jpg" alt="for her" /></a>
      </div>
      <div class="content__box content__box--right">
        <div class="content__box">
          <a href="/"><img src="../assets/75_off.jpg" alt="75 off" /></a>
        </div>
        <div class="content__box content__box--bottom">
          <a href="/"><img src="../assets/new_style.jpg" alt="new style" /></a>
</div>
      </div>

    </div>
    <!--Showcase-->
    <div>
      <tabs class="showcase-nav">
        <tab name="NEW ARRIVALS" class="showcase-nav__button">
          <ul class="showcase">
            <li class="showcase-item" v-for="product in products.slice(0,5)" :key="product.id">
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
        </tab>
        <tab name="TOP SELLERS" class="showcase-nav__button">
          <ul class="showcase">
            <li class="showcase-item" v-for="product in products.slice(6,11)" :key="product.id">
              <router-link :to="/product/ + product.id">
                <img class="showcase-item__img" :src="'/static/products/' + product.img" :alt="product.title" />
                <h4 class="showcase-item__title">{{ product.title }}</h4>
                <div class="showcase-item__bottom">
                  <p class="showcase-item__price">$ {{product.price}}</p>
                  <button class="showcase-item__button"><span class="fa fa-shopping-bag"></span> Add to bag</button>
                </div>
              </router-link>
            </li>
          </ul>
        </tab>
        <tab name="FEATURED" class="showcase-nav__button">
          <ul class="showcase">
            <li class="showcase-item" v-for="product in products.slice(11,16)" :key="product.id">
              <router-link :to="/product/ + product.id">
                <img class="showcase-item__img" :src="'/static/products/' + product.img" :alt="product.title" />
                <h4 class="showcase-item__title">{{ product.title }}</h4>
                <div class="showcase-item__bottom">
                  <p class="showcase-item__price">$ {{product.price}}</p>
                  <button class="showcase-item__button"><span class="fa fa-shopping-bag"></span> Add to bag</button>
                </div>
              </router-link>
            </li>
          </ul>
        </tab>
      </tabs>
    </div>

    <!--Banner 2-->
    <img src="../assets/all_summer.jpg" class="banner2" alt="banner2"/>

    <!--About-->
    <div class="about">
      <img src="../assets/jane.jpg" class="about__img"/>
      <div class="about__name"><h3>Jane Smith</h3></div>
      <div class="about__text"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div>
    </div>

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
    name: 'swiper',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    name: 'product-list',
    data: function () {
      return {
        products: [],
        limitationList: 5
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
