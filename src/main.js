// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/reset.css"
import 'lib-flexible'
import vpay from 'vpay'   
import layer from 'vue-layer'
import store from './vuex/index'
import VueScroller from 'vue-scroller'
import {server} from './util/util'
import {url} from './util/util'
import {parameter} from './util/util'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import wx from 'weixin-js-sdk'
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)
Vue.config.productionTip = false
Vue.prototype.$layer = layer(Vue);
Vue.use(vpay)
Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$server=server
Vue.prototype.$url=url
Vue.prototype.$parameter=parameter
Vue.prototype.$wx = wx;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
