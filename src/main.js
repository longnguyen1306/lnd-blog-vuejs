import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(Vuerouter);

const router = new Vuerouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
