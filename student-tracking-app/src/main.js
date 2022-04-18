import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router/index.js';
import LayoutPage from "./views/LayoutPage.vue";
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false
Vue.component("LayoutPage", LayoutPage);
Vue.prototype.store = {
  logged: false,
  baseUrl: 'https://localhost:7139/',
  clickDirect: function (viewName) {
    router.push({ name: viewName }).catch(() => { });
  }
};
Vue.use(VueSimpleAlert);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
