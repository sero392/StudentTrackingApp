import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router/index.js';
import MessageBox from "./components/MessageBoxComponent.vue";
import LayoutPage from "./views/LayoutPage.vue";

Vue.config.productionTip = false
Vue.component("MessageBox", MessageBox);
Vue.component("LayoutPage", LayoutPage);
Vue.prototype.store = {
  logged: false,
  baseUrl: 'https://localhost:7139/',
  clickDirect: function (viewName) {
    router.push({ name: viewName }).catch(() => { });
  }
};

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
