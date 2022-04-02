import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import MessageBox  from "./components/MessageBox.vue";

Vue.config.productionTip = false
Vue.component("MessageBox", MessageBox);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
