import App from './App.vue'
import Vue from 'vue';
// import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
