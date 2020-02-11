import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'
// import MintUI from 'mint-ui'
// 引入样式
// import 'mint-ui/lib/style.css';

Vue.config.productionTip = false
// 安装
// Vue.use(MintUI)
new Vue({
  // 注册router  多了router-view   router-link  $route  $router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
