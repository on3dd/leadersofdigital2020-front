import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './store';

const unsync = sync(store, router); // done. Returns an unsync callback fn

import axios from 'axios';
Vue.prototype.$http = axios.create({
  baseURL: 'http://128.199.238.245:8080/api/v1',
  timeout: 10000,
});

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

unsync();
