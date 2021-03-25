import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


