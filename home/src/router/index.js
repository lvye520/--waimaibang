import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../views/Msite/Msite.vue'

// 安装Router
Vue.use(Router)

// 定义路由实例化对象，并传递路由规则
export default new Router({
  routes: [
    { path: '/', name: 'msite', component: Msite, meta: { show: true } },
    { path: '/search', name: 'search', component: () => import('../views/Search/Search.vue'), meta: { show: true } },
    { path: '/order', name: 'order', component: () => import('../views/Order/Order.vue'), meta: { show: true } },
    { path: '/profile', name: 'profile', component: () => import('../views/Profile/Profile.vue'), meta: { show: true } },
    { path: '/login', name: 'login', component: () => import('../views/Login/Login.vue') },
    {
      path: '/shop', name: 'shop', component: () => import('../views/Shop/Shop.vue'),
      children: [
        {
          path: '/shop/goods',
          component: () => import('../views/Shop/ShopGoods/ShopGoods')
        },
        {
          path: '/shop/info',
          component: () => import('../views/Shop/ShopInfo/ShopInfo')
        },
        {
          path: '/shop/ratings',
          component: () => import('../views/Shop/ShopRating/ShopRating')
        },
        {
          path: '',
          component: () => import('../views/Shop/ShopGoods/ShopGoods')
        }


      ]
    },

    // 默认项
    { path: '*', component: Msite, meta: { show: true } }
  ]
})
