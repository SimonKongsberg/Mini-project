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

        <p class="sale-float sale-float--product">{{ product.sale}}</p>
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
            <p class="product-nav__text">Experience a product filled with features of comfort and design. This product has amazing features like the listed below functions.
            Expand your closet today with this exicting new piece and fell better about your style.</p><br />
            <ul>
              <li>
                - Style
              </li>
              <li>
                - Colors
              </li>
              <li>
                - Comfort
              </li>
            </ul>
          </tab>
          <tab name="Brand" class="product-nav__button">
            <p class="product-nav__text">
              Look at some amazing facts about the product below!
            </p><br />
            <ul>
              <li>
                - Its cheap
              </li>
              <li>
                - Made by the chinese
              </li>
              <li>
                - Cheap materials, but cheap price  
              </li>
            </ul>
          </tab>
          <tab name="Info" class="product-nav__button">
            <p class="product-nav__text">
              Loot at all the things this product comes with!
            </p><br />
            <ul>
              <li>
                - Cool features
              </li>
              <li>
                - Not so cool feature
              </li>
              <li>
                - But you gonna buy anyway cuz its a great price
              </li>
            </ul>
          </tab>
        </tabs>
      </div>
    </div>

    <div class="promo">
      <h1 class="promo__title">Sharpen Your Look</h1>
      <div class="line--blue"></div>
      <p class="promo__text">Experience some of the greatest craftmensship of this age. Worked on for hundred of hours, made of the best materials known to man, it will implode your mind reading about all the amazing ways these clothes will enhance your style and sense of pride and acomplisment.</p>
      <br /><br />
    </div>

    <!--Product info-->
    <div class="info">
      <img src ="../assets/big_image_left.png" alt="big image left" class="info__img" />
      <div class="info-box info-box--black">
        <h2 class="info-box__title">Extraordinary Design</h2>
        <p class="info-box__text">Here at Classy we prioitize design over comfort, made by the most expensive designers of the north eastern valley's of the south vestern moutainpass's in the Indian wastes of New Khemut.</p>
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
        <h2 class="info-box__title">Extraordinary Comfort</h2>
        <p class="info-box__text info-box__text--white">Scrath what we previusly stated, these clothes prioitises comfort over design, and is so comfortable to wear you'll fell like your wearing nothing at all, nothing at all, nothing at all.</p>
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
        <a href="https:/www.twitter.com"><div class="circle-social"><span class="fa fa-twitter social__nav-icon"></span></div></a>
        <a href="https:/www.pinterest.com"><div class="circle-social"><span class="fa fa-pinterest social__nav-icon"></span></div></a>
        <a href="https:/www.facebook.com"><div class="circle-social"><span class="fa fa-facebook social__nav-icon"></span></div></a>
        <a href="https:/www.google.com"><div class="circle-social"><span class="fa fa-google-plus social__nav-icon"></span></div></a>
        <a href="https:/www.youtube.com"><div class="circle-social"><span class="fa fa-youtube social__nav-icon"></span></div></a>
        <a href="https:/www.tumblr.com"><div class="circle-social"><span class="fa fa-tumblr social__nav-icon"></span></div></a>
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
