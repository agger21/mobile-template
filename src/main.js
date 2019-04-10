// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import router from './router'
import utils from './jslib/utils.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './router/router-intercept'
import './jslib/controlSize'
import './filter/index.js'
import FastClick from 'fastclick'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole();
FastClick.attach(document.body);

require('./assets/style/reset.css');
require('./assets/style/animate.css');
require('swiper/dist/css/swiper.css');
require('./assets/font/iconfont.css');   //标签内容填例如：&#xe61d;

Vue.prototype.$utils = utils;
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;



//按需引入vux
import {XButton} from 'vux'

Vue.component('x-button', XButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
