import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  // 注册router  多了router-view   router-link  $route  $router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
