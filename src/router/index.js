import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import FooterBot from '@/components/Footer'
import Product from '@/components/Product'
import Frontpage from '@/components/Frontpage'
import Collection from '@/components/Collection'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import { Tabs, Tab } from 'vue-tabs-component';



// require styles
import 'swiper/dist/css/swiper.css'

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: Product
    }
  ]
})
