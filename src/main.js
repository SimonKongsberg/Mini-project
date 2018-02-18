// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import { Tabs, Tab } from 'vue-tabs-component';
import VeeValidate from 'vee-validate';


Vue.use(VeeValidate);
// require styles
import 'swiper/dist/css/swiper.css'

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


