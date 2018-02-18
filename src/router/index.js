import Vue from 'vue'
import Router from 'vue-router'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import FooterBot from '@/components/Footer'
import Product from '@/components/Product'
import Frontpage from '@/components/Frontpage'
import Collection from '@/components/Collection'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/contact',
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
