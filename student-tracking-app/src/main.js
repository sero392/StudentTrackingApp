import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router/index.js';
import MessageBox from "./components/MessageBox.vue";

Vue.config.productionTip = false
Vue.component("MessageBox", MessageBox);
Vue.store = Vue.prototype.store = {
  logged: false,
};

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
