import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
// 引入过滤器
import './filters'
// 图片懒加载
import VueLazyloade from 'vue-lazyload'
import './registerServiceWorker'
import MintUI from 'mint-ui'
// 引入样式
import 'mint-ui/lib/style.css';
import { loading } from "./common/imgs/01.gif";

Vue.config.productionTip = false
// 安装
Vue.use(MintUI)
// // 注册
Vue.use(VueLazyloade,{
  loading  
})
new Vue({
  // 注册router  多了router-view   router-link  $route  $router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
