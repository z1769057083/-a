// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/rem.js'
import '@/assets/css/reset.scss'
Vue.config.productionTip = false

import VueScroller from 'vue-scroller'
import axios from 'axios'
Vue.use(VueScroller)
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  meta:{
  	home:true
  }
})
