import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import FooterBot from '@/components/Footer'
import Product from '@/components/Product'
import Frontpage from '@/components/Frontpage'


Vue.use(Router)

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
    }
  ]
})
