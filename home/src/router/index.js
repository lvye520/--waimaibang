import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../views/Msite/Msite.vue'

// 安装Router
Vue.use(Router)

// 定义路由实例化对象，并传递路由规则
export default new Router({
  routes: [
    { path: '/msite', name: 'msite', component: Msite },
    { path: '/search', name: 'search', component: () => import('../views/Search/Search.vue') },
    { path: '/order', name: 'order', component: () => import('../views/Order/Order.vue') },
    { path: '/profile', name: 'profile', component: () => import('../views/Profile/Profile.vue') },
    // 默认项
    { path: '*', component: Msite }
  ]
})
