import Vue from 'vue';
import './plugins/vuetify'
import router from '@/router.js';
import store from '@/store.js';
import App from '@/App.vue';

import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
